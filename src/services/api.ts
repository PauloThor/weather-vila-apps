import axios from "axios";

export const apiUrl = axios.create({
  baseURL: "https://dataservice.accuweather.com",
});

export const apiKey =
  process.env.REACT_APP_LOCATION_KEY ?? "KzwwJM2XK7r4BL3OzaanXiemxbiIDx7r";
