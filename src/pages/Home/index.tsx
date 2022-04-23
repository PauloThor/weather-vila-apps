import { useEffect, useState } from "react";
import AutoComplete from "../../components/AutoComplete";
import Header from "../../components/Header";
import MainCard from "../../components/MainCard";
import MultipleCard from "../../components/MultipleCard";
import TimeCard from "../../components/TimeCard";
import { useCity } from "../../hooks/City";
import { CurrentConditions } from "../../model/current-conditions";
import { DailyForecast } from "../../model/daily-forecast";
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
  const [location] = useState<Location>(initialLocation);
  const [loading, setLoading] = useState<boolean>(false);
  const { getCurrentConditions, getDailyForecast, getHoursForecast } =
    useCity();

  const getInfo = async () => {
    setLoading(true);
    const conditions = await getCurrentConditions(location.key);
    const dailyForecast = await getDailyForecast(location.key);
    const hourForecast = await getHoursForecast(location.key);

    setCurrentConditions(conditions);
    setDailyForecast(dailyForecast);
    setHourForecast(hourForecast);
    setLoading(false);
  };

  useEffect(() => {
    getInfo();
    // eslint-disable-next-line
  }, [location]);

  return (
    <>
      <Header />
      <Container>
        <button onClick={() => console.log(currentConditions)}>
          aaaaaaaaaa
        </button>
        <button onClick={() => console.log(dailyForecast)}>bbbbbb</button>
        {!loading ? (
          <>
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
            />
            <MultipleCard data={hourForecast} title="Previsão por hora" />
            <AutoComplete />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Container>
    </>
  );
};

export default Home;
