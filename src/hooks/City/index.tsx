import { createContext, ReactNode, useContext } from "react";
import { apiKey, apiUrl } from "../../services/api";

interface CityData {
  getCurrentConditions: (locationKey: string) => any;
  getDailyForecast: (locationKey: string) => any;
}

interface CityProviderProps {
  children: ReactNode;
}

const CityContext = createContext<CityData>({} as CityData);

export const CityProvider = ({ children }: CityProviderProps) => {
  const params = {
    apikey: apiKey,
    language: "pt-br",
  };

  const getCurrentConditions = async (locationKey: string) => {
    const res = await apiUrl.get(`/currentconditions/v1/${locationKey}`, {
      params,
    });

    const data = res.data[0];
    const output = {
      temperature: data.Temperature.Metric.Value + "º",
      weather: data.WeatherText,
      icon: data.WeatherIcon,
    };
    return output;
  };

  const getDailyForecast = async (locationKey: string) => {
    const customParams = { ...params, metric: true, details: true };
    const res = await apiUrl.get(`/forecasts/v1/daily/1day/${locationKey}`, {
      params: customParams,
    });

    const headline = res.data.Headline;
    const forecast = res.data.DailyForecasts[0];

    const output = {
      max: forecast.Temperature.Maximum.Value + "º",
      min: forecast.Temperature.Minimum.Value + "º",
      headline: headline.Text,
      link: headline.Link,
      termicSensationMin: forecast.RealFeelTemperature.Minimum.Value + "º",
      termicPhraseMin: forecast.RealFeelTemperature.Minimum.Phrase,
      termicSensationMax: forecast.RealFeelTemperature.Maximum.Value + "º",
      termicPhraseMax: forecast.RealFeelTemperature.Maximum.Phrase,
      day: {
        icon: forecast.Day.Icon,
        text: forecast.Day.IconPhrase,
        rainOds: forecast.Day.RainProbability + "%",
        rain: forecast.Day.Rain.Value + "mm",
        snow: forecast.Day.SnowProbability + "%",
        wind: `${forecast.Day.Wind.Speed.Value} km/h`,
      },
      night: {
        icon: forecast.Night.Icon,
        text: forecast.Night.IconPhrase,
        rainOds: forecast.Night.RainProbability + "%",
        rain: forecast.Night.Rain.Value + "mm",
        snow: forecast.Night.SnowProbability + "%",
        wind: `${forecast.Night.Wind.Speed.Value} km/h`,
      },
    };

    return output;
  };

  return (
    <CityContext.Provider value={{ getCurrentConditions, getDailyForecast }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => useContext(CityContext);