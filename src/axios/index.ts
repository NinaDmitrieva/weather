import axios from "axios";
import { config } from "process";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//перехватываем запрос к серверу,в конфиге меняем url, добавляем ключ из перем.окружения, возвращаем конфиг
api.interceptors.request.use((config) => {
  config.url = config.url + `$appid=` + process.env.REACT_APP_API_KEY;
  return config;
});

export default api;