import { combineReducers } from "redux";
import { WeatherReducer } from "./WeatherReducer";

export const allReducers = combineReducers({
	weather: WeatherReducer
})