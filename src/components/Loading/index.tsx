import { Container } from "./styles";
import LoadingImg from "../../assets/img/loading.png";

const Loading = () => {
  return (
    <Container>
      <img alt="Loading" src={LoadingImg} />
    </Container>
  );
};

export default Loading;
