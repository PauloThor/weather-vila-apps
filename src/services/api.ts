import axios from "axios";

export const apiUrl = axios.create({
  baseURL: "http://dataservice.accuweather.com",
});

export const apiKey =
  process.env.REACT_APP_LOCATION_KEY ?? "Gsb9DTk0WmBISUeh8TM3AJcHjCzUrUtD";
