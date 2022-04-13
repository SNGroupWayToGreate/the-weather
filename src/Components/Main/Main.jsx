import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../Banner/Banner'
import './Main.css'

export default function Main() {
	const weather = useSelector(state => state.weather.weatherData)
	const weatherIconSrc=Object.keys(weather).length && weather?.weather[0]?.icon
	const weatherDescription=Object.keys(weather).length && weather?.weather[0]?.description

	return (
		<main className='main'>
			<div className="main__appName">the.weather</div>
			<div className="main__body">
				<div className="main__temp">{
					weather?.main?.temp &&
					<>
						<span>{Math.round(weather?.main?.temp - 273.15)}</span>
						<sup>&deg;C</sup>
					</>
				}
				</div>
				<div className="main__info">
					<div className="main__name">
						{weather?.name}
						<sup>{weather?.sys?.country}</sup>
					</div>
					<div className="main__date">
					
					</div>
				</div>
				<div className="main__details">
					<div className="main__icon">
						<img src={` http://openweathermap.org/img/wn/${weatherIconSrc}.png`} />
					</div>
					<div className="main__weather">
						{weatherDescription}
					</div>
				</div>
			</div>
			<Banner main={Object.keys(weather).length && weather?.weather[0]?.main} />
		</main>
	)
}
