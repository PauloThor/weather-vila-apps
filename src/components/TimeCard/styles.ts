import styled from "styled-components";
import { Color } from "../../model/enums/theme-colors";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #000000;
`;

export const TimeHeader = styled.div`
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: ${Color.BACKGROUND_SECONDARY};
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${Color.HIGHLIGHT};
    transition: 0.5s;
  }
`;

export const TimeContainer = styled.div`
  width: 50%;

  h2 {
    padding: 10px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5px;
  padding-left: 5px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding-top: 10px;
`;

export const TextInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  margin: 10px 5px;
  padding-top: 15px;
`;
