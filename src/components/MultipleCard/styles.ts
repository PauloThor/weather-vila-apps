import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";

export const Container = styled.div`
  background-color: ${Color.BACKGROUND_PRIMARY};
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;

  .first {
    font-weight: 700;
    border: none;
  }
`;

export const SingleInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  border-left: 1px solid rgba(255, 255, 255, 0.5);

  span {
    color: ${Color.TEXT_SECONDARY};
    padding: 10px;
    font-size: 1.3rem;
  }

  h3 {
    font-size: 1.4rem;
  }
`;

export const RainOds = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100%;
`;
