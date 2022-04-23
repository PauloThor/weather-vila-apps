import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";

export const Container = styled.div``;

export const Title = styled.h2``;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const SingleInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  span {
    color: ${Color.SECONDARY};
  }

  #first {
    font-weight: 700;
  }
`;
