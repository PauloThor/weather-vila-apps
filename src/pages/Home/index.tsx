import { useEffect, useState } from "react";
import MainCard from "../../components/MainCard";
import TimeCard from "../../components/TimeCard";
import { useCity } from "../../hooks/City";
import { CurrentConditions } from "../../model/current-conditions";
import { DailyForecast } from "../../model/daily-forecast";
import { Location } from "../../model/location";
import { Container } from "./styles";

const initialLocation = {
  name: localStorage.getItem("locationName") ?? "Brasília",
  key: localStorage.getItem("locationKey") ?? "45449",
};

const Home = () => {
  const [currentConditions, setCurrentConditions] =
    useState<CurrentConditions>();
  const [dailyForecast, setDailyForecast] = useState<DailyForecast>();
  const [location] = useState<Location>(initialLocation);
  const [loading, setLoading] = useState<boolean>(false);
  const { getCurrentConditions, getDailyForecast } = useCity();

  const getInfo = async () => {
    setLoading(true);
    const conditions = await getCurrentConditions("45449");
    setCurrentConditions(conditions);

    const forecast = await getDailyForecast("45449");
    setDailyForecast(forecast);
    setLoading(false);
  };

  useEffect(() => {
    getInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <button onClick={() => console.log(currentConditions)}>aaaaaaaaaa</button>
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
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
};

export default Home;
