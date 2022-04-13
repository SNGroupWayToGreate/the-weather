import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../Banner/Banner'
import './Main.css'

export default function Main() {
	const weather = useSelector(state => state.weather.weatherData)

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
						Clear cky
					</div>
				</div>
				<div className="main__details">
					<div className="main__icon">
						<img src='' />
					</div>
					<div className="main__weather">
						Clear cky
					</div>
				</div>
			</div>
			<Banner main={weather && weather?.weather[0]?.main} />
		</main>
	)
}
