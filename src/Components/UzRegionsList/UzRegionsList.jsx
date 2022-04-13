import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from '../../Redux/WeatherReducer'
import "./UzRegionsList.css"



export default function UzRegionsList() {
	const uzRegions = useSelector(state => state.weather.uzbRegions)
	const isFetching = useSelector(state => state.weather.isFetching)
	const dispatch = useDispatch()

	const uzRegionsElem = uzRegions?.map((region) => {
		return (
			<li disabled={isFetching} key={region.id} className="eside__region"
				onClick={() => { dispatch(getWeather(region.city)) }}			>
				{region.city}
			</li>
		)
	})

	return (
		<div>
			<div className="eside__regions">
				<ul className="eside__list">
					{uzRegionsElem}
				</ul>
			</div>
		</div>
	)
}
