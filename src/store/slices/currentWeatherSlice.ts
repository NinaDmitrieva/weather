import { createSlice } from "@reduxjs/toolkit";

type CurrentWeather = {
    weather: any;
    isLoading: boolean;
    response: Response;
};

type Response= {
    status: number;
    massage: string;
}

const initialState = {
    weather: {},
    isLoading: false,
    response:{
        status:0,
        massage: '',
    },
};

export const currentWeatherSlice = createSlice({
    name: 'current_wheather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true; 
        },
        fetchCurrentWeatherSuccess(state, action: any) {
            //state.wheather = action.
        },
    },
});