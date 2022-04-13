import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Eside from './Components/Eside/Eside'
import Main from './Components/Main/Main'
import { getWeather } from './Redux/WeatherReducer'

export default function App() {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getWeather('Tashkent'))
	}, [])





	return (
		<div className='wrapper'>
			<div className="content container">
				<Main />
				<Eside />
			</div >
		</div>
	)
}
