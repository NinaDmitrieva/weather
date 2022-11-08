import axios, { AxiosResponse } from "axios";
import { Weather } from "../store/types/types";

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon=${city}&appid=d8550c9e6eb28bdf009ba6a0974441e4`)
    }
};