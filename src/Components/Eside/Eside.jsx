import React from 'react'
import Search from '../Search/Search'
import UzRegionsList from '../UzRegionsList/UzRegionsList'
import WeatherDetails from '../WeatherDetails/WeatherDetails'
import './Eside.css'

export default function Eside() {
	return (
		<eside className="eside">
			<div className="eside__content">
				<Search />
				<div className="eside__body">
					<UzRegionsList />
					<WeatherDetails />
				</div>
			</div>
		</eside>
	)
}
