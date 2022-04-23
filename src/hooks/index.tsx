import { ReactNode } from "react";
import { CityProvider } from "./City";

interface Props {
  children: ReactNode;
}

const Provider = ({ children }: Props) => {
  return <CityProvider>{children}</CityProvider>;
};

export default Provider;
