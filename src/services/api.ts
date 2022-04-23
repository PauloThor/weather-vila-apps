import axios from "axios";

export const apiUrl = axios.create({
  baseURL: "https://dataservice.accuweather.com",
});

export const apiKey =
  process.env.REACT_APP_LOCATION_KEY ?? "GFN7v6QWAkTS5e8IHa4lY733hnKldKhR";
