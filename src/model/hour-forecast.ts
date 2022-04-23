import { LogoProps } from "./../shared/util/image-utils";
export interface HourForecastComplete {
  DateTime: string;
  EpochDateTime: number;
  WeatherIcon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  IsDaylight: boolean;
  Temperature: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
  PrecipitationProbability: number;
  MobileLink: string;
  Link: string;
  RainProbability: number;
}

export interface HourForecast {
  link: string;
  icon: LogoProps;
  weather: string;
  time: string;
  temperature: string;
  rain: string;
}
