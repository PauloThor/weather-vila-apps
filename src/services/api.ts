import axios from "axios";

export const apiUrl = axios.create({
  baseURL: "http://dataservice.accuweather.com",
});

export const apiKey = "wK86GjeZs7Mn17Oy1AJIxhRv2C6kDPmV";
