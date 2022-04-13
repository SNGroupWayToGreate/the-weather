import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCityName } from '../../Redux/action'
import { getWeather } from '../../Redux/WeatherReducer'
import './Search.css'



export default function Search() {
	const cityName = useSelector(state => state.weather.cityName)
	const dispatch = useDispatch()
	return (
		<div className="eside__serch">
			<div className="eside__input">
				<input
					placeholder='Another location'
					type='text'
					value={cityName}
					onChange={(e) => { dispatch(setCityName(e.target.value)) }}
				/>
			</div>
			<div className="eside__button">
				<button type='button' disabled={!(cityName.trim())} onClick={() => { dispatch(getWeather(cityName)) }}>Search</button>
			</div>
		</div>
	)
}
