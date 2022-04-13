import React from 'react'
import { useSelector } from 'react-redux'
import "./WeatherDetails.css"

export default function WeatherDetails() {
	const weather = useSelector(state => state.weather.weatherData)
	return (
		<div className="eside__details">
			<div className="eside__title">
				Weather Details
			</div>
			<div className="eside__weather">
				<div className="eside__item">
					<span>Cloudy</span><span>{weather && weather?.clouds?.all} %</span>
				</div>
				<div className="eside__item">
					<span>Humidity</span><span>{weather && weather?.main?.humidity} %</span>
				</div>
				<div className="eside__item">
					<span>Wind</span><span>{weather && weather?.wind?.speed} km/h</span>
				</div>
				<div className="eside__item">
					<span>Rain</span><span>0 mm</span>
				</div>
			</div>
		</div>
	)
}
