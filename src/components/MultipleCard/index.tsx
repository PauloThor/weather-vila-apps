import { TimeMoment, TimeTypes } from "../../model/enums/time-types";
import { HourForecast } from "../../model/hour-forecast";
import ImageUtils from "../../shared/util/image-utils";
import TimeUtils from "../../shared/util/time-utils";
import { Container, InfoContainer, SingleInfo, Title } from "./styles";

interface Props {
  title: string;
  data: HourForecast[];
  type?: TimeTypes.DAYS | TimeTypes.HOURS;
}

const MultipleCard = ({ title, data, type = TimeTypes.HOURS }: Props) => {
  return (
    <Container className="container">
      <Title>{title}</Title>
      <InfoContainer>
        {data.map((item, index) => {
          let time = TimeUtils.getTimeHours(item.time);
          if (index === 0) {
            time = type === TimeTypes.HOURS ? TimeMoment.NOW : TimeMoment.TODAY;
          }
          return (
            <SingleInfo className={index === 0 ? "first" : ""}>
              <h3>{time}</h3>
              <span>{item.temperature}</span>
              <img
                alt={`${item.time}-${index}`}
                src={ImageUtils.getLogo(item.icon)}
              />
            </SingleInfo>
          );
        })}
      </InfoContainer>
    </Container>
  );
};

export default MultipleCard;
