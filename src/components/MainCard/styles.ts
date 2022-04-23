import styled from "styled-components";

export const Container = styled.div`
  background: rgb(80, 181, 212);
  background: linear-gradient(
    180deg,
    rgba(80, 181, 212, 1) 0%,
    rgba(54, 162, 184, 1) 50%,
    rgba(33, 81, 130, 1) 100%
  );
`;

export const Header = styled.div`
  background: rgb(63, 71, 65);
  background: linear-gradient(
    85deg,
    rgba(63, 71, 65, 1) 0%,
    rgba(82, 113, 139, 1) 50%,
    rgba(0, 127, 255, 1) 100%
  );
  padding: 10px;
  font-size: 1.5rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const Content = styled.div`
  padding: 10px;
  font-size: 3rem;

  p {
    margin-top: 5px;
    font-size: 1.5rem;
  }
`;

export const SubContent = styled.div`
  display: flex;
`;
