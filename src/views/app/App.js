import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../component/navbar/navbar'
import Home from '../pages/home/home'
import Tshirt from '../pages/tshirt/tshirt'
import Upload from '../pages/upload/upload'

import './app.scss'

function App() {
	return (
		<div className='app-container'>
			<Navbar/>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/tshirt' component={Tshirt} />
				<Route exact path='/upload' component={Upload} />

			</Switch>
		</div>
	)
}

export default App
