import React from 'react'


import './Banner.css'
import { useSelector } from 'react-redux'

export default function Banner({ main }) {
	const weather = useSelector(state => state.weather.weatherData)
	const weatherImages = useSelector(state => state.weather.weatherImages)
	//console.log(weather.weather[0].main);

	return (<>
		<img className='banner' src={weatherImages[main]} alt="weather-image"/>
	</>

	)
}
