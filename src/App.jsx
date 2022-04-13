import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { setCityName } from './Redux/action'
import { getWeather } from './Redux/WeatherReducer'

export default function App() {
	const weather = useSelector(state => state.weather.weatherData)
	const isFetching = useSelector(state => state.weather.isFetching)
	const uzRegions = useSelector(state => state.weather.uzbRegions)
	const cityName = useSelector(state => state.weather.cityName)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getWeather('Tashkent'))
	}, [])

	const uzRegionsElem = uzRegions?.map((region) => {
		return (
			<li disabled={isFetching} key={region.id} className="eside__region"
				onClick={() => { dispatch(getWeather(region.city)) }}			>
				{region.city}
			</li>
		)
	})



	return (
		<div className='wrapper'>
			<div className="content container">
				<main className='main'>
					<div className="main__appName">the.weather</div>
					<div className="main__body">
						<div className="main__temp">
							<span>{weather && Math.round(weather?.main?.temp)}</span>
							<sup>&deg;C</sup>
						</div>
						<div className="main__info">
							<div className="main__name">
								{weather && weather?.name}
								<sup>{weather && weather?.sys?.country}</sup>
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
				</main>
				<eside className="eside">
					<div className="eside__content">
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
						<div className="eside__body">
							<div className="eside__regions">
								<ul className="eside__list">
									{uzRegionsElem}
								</ul>
							</div>
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
						</div>
					</div>
				</eside>
			</div >
		</div>
	)
}
