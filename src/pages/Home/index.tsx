import { useEffect, useState } from "react";
import AutoComplete from "../../components/AutoComplete";
import Loading from "../../components/Loading";
import MainCard from "../../components/MainCard";
import MultipleCard from "../../components/MultipleCard";
import TimeCard from "../../components/TimeCard";
import { useCity } from "../../hooks/City";
import { CurrentConditions } from "../../model/current-conditions";
import { DailiesForecast, DailyForecast } from "../../model/daily-forecast";
import { TimeTypes } from "../../model/enums/time-types";
import { HourForecast } from "../../model/hour-forecast";
import { Location } from "../../model/location";
import { Container } from "./styles";

const initialLocation = {
  name: localStorage.getItem("locationName") ?? "Brasília, DF",
  key: localStorage.getItem("locationKey") ?? "45449",
};

const Home = () => {
  const [currentConditions, setCurrentConditions] =
    useState<CurrentConditions>();
  const [dailyForecast, setDailyForecast] = useState<DailyForecast>();
  const [hourForecast, setHourForecast] = useState<HourForecast[]>([]);
  const [dailiesForecast, setDailiesForecast] = useState<DailiesForecast[]>([]);
  const [location, setLocation] = useState<Location>(initialLocation);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    getCurrentConditions,
    getDailyForecast,
    getHoursForecast,
    getDailiesForecast,
  } = useCity();

  const getInfo = async () => {
    setLoading(true);
    const conditions = await getCurrentConditions(location.key);
    const dailyInfo = await getDailyForecast(location.key);
    const hourInfo = await getHoursForecast(location.key);
    const dailiesInfo = await getDailiesForecast(location.key);

    setCurrentConditions(conditions);
    setDailyForecast(dailyInfo);
    setHourForecast(hourInfo);
    setDailiesForecast(dailiesInfo);
    setLoading(false);
  };

  useEffect(() => {
    getInfo();
    // eslint-disable-next-line
  }, [location]);

  const handleLocation = (newLocation: Location) => {
    setLocation(newLocation);
    localStorage.setItem("locationName", newLocation.name);
    localStorage.setItem("locationKey", newLocation.key);
  };

  return (
    <>
      <Container>
        {!loading ? (
          <>
            <AutoComplete handleEvent={handleLocation} />
            <MainCard
              location={location.name}
              weather={currentConditions?.weather ?? ""}
              temperature={currentConditions?.temperature ?? ""}
              min={dailyForecast?.min ?? ""}
              max={dailyForecast?.max ?? ""}
              icon={currentConditions?.icon ?? 1}
            />
            <TimeCard
              day={dailyForecast?.day}
              night={dailyForecast?.night}
              location={location.name}
              link={dailyForecast?.link}
            />
            <MultipleCard data={hourForecast} title="Previsão por hora" />
            <MultipleCard
              data={dailiesForecast}
              title="Previsão por dia"
              type={TimeTypes.DAYS}
            />
          </>
        ) : (
          <Loading />
        )}
      </Container>
    </>
  );
};

export default Home;
