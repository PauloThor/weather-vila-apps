import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Provider from "./hooks";
import WeatherRoutes from "./shared/routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <GlobalStyle />
        <WeatherRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
