import { setIsFetching, setWeatherData } from "./action"
import { SET_CITY_NAME, SET_IS_FETCHING, SET_WEATHER_DATA } from "./types"
import getData from '../Api/Api'


const initialState = {
	weatherData: {},
	uzbRegions: [
		{ id: "1", city: 'Tashkent' },
		{ id: "2", city: 'Navoi' },
		{ id: "3", city: 'Samarkand' },
		{ id: "4", city: 'Bukhara' },
		{ id: "5", city: 'Termiz' },
		{ id: "6", city: 'Guliston' },
		{ id: "7", city: 'Qarshi' },
		{ id: "8", city: 'Termiz' },
		{ id: "9", city: 'Andijan' },
		{ id: "10", city: 'Namangan' },
		{ id: "11", city: 'Fergana' },
		{ id: "12", city: 'Nukus' },
	],
	weatherImages: {
		Clouds: '#c0c0c0',
		Clear: '#87cbde',
		Rain: '#344583',
		Thunderstorm: '#С9В3В8',
		Snow: '#202223',
		Drizzle: '#С9В3В8',
		Haze: '#D5D0D4'
	},
	cityName: '',
	isFetching: false

}
const capitalize = (string) => {
	let arr = string.split(" ")
	let capitalizedWords = []
	for (let index = 0; index < arr.length; index++) {
		capitalizedWords.push(arr[index].charAt(0).toUpperCase() + arr[index].slice(1))
	}
	return capitalizedWords.join(' ')
}

export function WeatherReducer(state = initialState, action) {
	switch (action.type) {

		case SET_WEATHER_DATA:
			return { ...state, weatherData: { ...action.weather } }
		case SET_IS_FETCHING:
			return { ...state, isFetching: { ...action.payload } }
		case SET_CITY_NAME:

			return { ...state, cityName: capitalize(action.text) }

		default:
			return state
	}
};

export const getWeather = (city) => {
	return (dispatch) => {
		dispatch(setIsFetching(true))
		getData(city.trim()).then((data) => {
			dispatch(setWeatherData(data))
		})
		dispatch(setIsFetching(false))
	}
}
