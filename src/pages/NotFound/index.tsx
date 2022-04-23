import NotFoundImg from "../../assets/img/not-found.webp";
import { Container } from "./styles";

const NotFound = () => {
  return (
    <Container>
      <img alt="Not Found" src={NotFoundImg} />
    </Container>
  );
};

export default NotFound;
