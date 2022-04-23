import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Provider from "./hooks";
import WeatherRoutes from "./shared/routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <WeatherRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
