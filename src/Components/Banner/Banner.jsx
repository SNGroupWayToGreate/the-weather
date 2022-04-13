import React from 'react'
import clouds from '../../images/cloudy_sky.jpg'
import clear from '../../images/clear_sky.jpg'
import rain from '../../images/rain.jpg'
import thunderstorm from '../../images/thunderstorm.jpg'
import snow from '../../images/snow.jpg'
import drizzle from '../../images/drizzle.jpg'
import haze from '../../images/haze.jpg'

import './Banner.css'
import { useSelector } from 'react-redux'

export default function Banner({ main }) {
	const weather = useSelector(state => state.weather.weatherData)
	console.log(weather.weather[0].main);
	const weatherImages = {
		Clouds: clouds,
		Clear: clear,
		Rain: rain,
		Thunderstorm: thunderstorm,
		Snow: snow,
		Drizzle: drizzle,
		Haze: haze,


	}
	return (<>
		<img className='banner' src={weatherImages[`Clear`]} />
	</>

	)
}
