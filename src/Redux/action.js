import { SET_CITY_NAME, SET_IS_FETCHING, SET_WEATHER_DATA } from "./types";

export const setWeatherData = (weather) => ({
	type: SET_WEATHER_DATA,
	weather
})
export const setIsFetching = (payload) => ({
	type: SET_IS_FETCHING,
	payload
})
export const setCityName = (text) => ({
	type: SET_CITY_NAME,
	text
})


