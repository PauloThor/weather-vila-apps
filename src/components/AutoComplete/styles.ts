import { Color } from "./../../model/enums/theme-colors";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${Color.BACKGROUND_PRIMARY};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;

  input {
    border-radius: 10px;
    padding: 10px;
  }

  svg {
    cursor: pointer;
  }
`;

export const Items = styled.ul`
  position: absolute;
  background-color: ${Color.BACKGROUND_SECONDARY};
  margin-top: 77px;
`;

export const Item = styled.li`
  padding: 5px 10px;
  border-bottom: 1px solid white;
  min-width: 180px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${Color.HIGHLIGHT};
    transition: 0.5s;
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-bottom: 10px;
`;

export const Tag = styled.div`
  background-color: ${Color.BACKGROUND_SECONDARY};
  border-radius: 15px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: ${Color.HIGHLIGHT};
    transition: 0.5s;
  }
`;
