import { LogoProps } from "../shared/util/image-utils";

export interface DailyForecast {
  day: TimeWeather;
  night: TimeWeather;
  headline: string;
  link: string;
  max: string;
  min: string;
  termicSensationMin: string;
  termicPhraseMin: string;
  termicSensationMax: string;
  termicPhraseMax: string;
}

export interface TimeWeather {
  icon: LogoProps;
  text: string;
  rainOds: string;
  rain: string;
  snow: string;
  wind: string;
}

export interface DailiesForecast {
  time: string;
  temperature: string;
  icon: LogoProps;
  weather: string;
  link: string;
  rain: string;
}
