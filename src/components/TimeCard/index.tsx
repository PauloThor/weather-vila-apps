import { TimeWeather } from "../../model/daily-forecast";
import ImageUtils from "../../shared/util/image-utils";
import {
  Container,
  LogoContainer,
  TextInfo,
  TimeContainer,
  TimeHeader,
} from "./styles";

interface Props {
  day?: TimeWeather;
  night?: TimeWeather;
  location?: string;
}

const TimeCard = ({ day, night, location }: Props) => {
  return (
    <Container>
      <TimeHeader>
        <h2>Previsão para hoje para {location}</h2>
      </TimeHeader>
      <TimeContainer>
        <h2>Dia</h2>
        <LogoContainer>
          <p>{day?.text}</p>
          <img alt="Logo Dia" src={ImageUtils.getLogo(day?.icon ?? 1)} />
        </LogoContainer>
        <TextInfo>
          <span>Umidade</span>
          <span>{day?.rain}</span>
        </TextInfo>
        <TextInfo>
          <span>Chance de Chuva</span>
          <span>{day?.rainOds}</span>
        </TextInfo>
        <TextInfo>
          <span>Vento</span>
          <span>{day?.wind}</span>
        </TextInfo>
        <TextInfo>
          <span>Chance de Neve</span>
          <span>{day?.snow}</span>
        </TextInfo>
      </TimeContainer>
      <TimeContainer>
        <h2>Noite</h2>
        <LogoContainer>
          <p>{night?.text}</p>
          <img alt="Logo Noite" src={ImageUtils.getLogo(day?.icon ?? 1)} />
        </LogoContainer>
        <TextInfo>
          <span>Umidade</span>
          <span>{night?.rain}</span>
        </TextInfo>
        <TextInfo>
          <span>Chance de Chuva</span>
          <span>{night?.rainOds}</span>
        </TextInfo>
        <TextInfo>
          <span>Vento</span>
          <span>{night?.wind}</span>
        </TextInfo>
        <TextInfo>
          <span>Chance de Neve</span>
          <span>{night?.snow}</span>
        </TextInfo>
      </TimeContainer>
    </Container>
  );
};

export default TimeCard;
