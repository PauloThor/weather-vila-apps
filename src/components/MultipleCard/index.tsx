import { TimeMoment, TimeTypes } from "../../model/enums/time-types";
import { HourForecast } from "../../model/hour-forecast";
import ImageUtils from "../../shared/util/image-utils";
import TimeUtils from "../../shared/util/time-utils";
import { TimeHeader } from "../TimeCard/styles";
import { Container, InfoContainer, RainOds, SingleInfo } from "./styles";
import { WiRaindrop } from "react-icons/wi";
import CityUtils from "../../shared/util/city-utils";

interface Props {
  title: string;
  data: HourForecast[];
  type?: TimeTypes.DAYS | TimeTypes.HOURS;
}

const MultipleCard = ({ title, data, type = TimeTypes.HOURS }: Props) => {
  const handleTime = (time: string) => {
    const options = {
      [TimeTypes.DAYS]: {
        moment: TimeMoment.TODAY,
        convert: TimeUtils.getTimeDay(time),
      },
      [TimeTypes.HOURS]: {
        moment: TimeMoment.NOW,
        convert: TimeUtils.getTimeHours(time),
      },
    };

    return options[type];
  };

  return (
    <Container className="container">
      <TimeHeader onClick={() => CityUtils.OpenTab(data[0].link ?? "")}>
        <h2>{title}</h2>
      </TimeHeader>
      <InfoContainer>
        {data.map((item, index) => {
          let time = handleTime(item.time).convert;
          if (index === 0) {
            time = handleTime(item.time).moment;
          }
          return (
            <SingleInfo
              className={index === 0 ? "first" : ""}
              key={`${item.time}-${index}`}
            >
              <h3>{time}</h3>
              <span>{item.temperature}</span>
              <img
                alt={`${item.time}-${index}`}
                src={ImageUtils.getLogo(item.icon)}
              />
              <RainOds>
                <WiRaindrop size={20} color={"#1B4DE4"} />
                <p>{item.rain}</p>
              </RainOds>
            </SingleInfo>
          );
        })}
      </InfoContainer>
    </Container>
  );
};

export default MultipleCard;
