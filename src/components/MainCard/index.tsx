import ImageUtils, { LogoProps } from "../../shared/util/image-utils";
import { Container, Content, Header, SubContent } from "./styles";

interface Props {
  location: string;
  min: string;
  max: string;
  weather: string;
  temperature: string;
  icon: LogoProps;
}

const MainCard = ({
  location,
  min,
  max,
  weather,
  temperature,
  icon,
}: Props) => {
  return (
    <Container className="container">
      <Header>
        <p> {location} </p>
      </Header>
      <Content>
        <h2>{temperature}</h2>
        <SubContent>
          <p>{weather}</p>
          <img src={ImageUtils.getLogo(icon ?? 1)} alt="Logo" />
        </SubContent>
        <p>
          Mín. {min} - Max. {max}
        </p>
      </Content>
    </Container>
  );
};

export default MainCard;
