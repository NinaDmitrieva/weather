import axios from "axios";

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<any>> {
        return axios.get('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={paris}&appid=d8550c9e6eb28bdf009ba6a0974441e4')
    }
}