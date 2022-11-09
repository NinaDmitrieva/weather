import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSlice from './slices/currentWeatherSlice';

const rootReducer = combineReducers({
  currentWeatherSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
