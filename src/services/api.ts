import axios from "axios";

export const apiUrl = axios.create({
  baseURL: "http://dataservice.accuweather.com",
});

export const apiKey = "Fr6uoaUrWIe29wOd5XKP058lFXBSKNJb";
