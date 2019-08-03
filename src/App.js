import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//pages
import MakeCV from './pages/MakeCV'
import ShowCV from './pages/ShowCV'
import HomeCV from './pages/HomeCV'
//styles
import './global.css'

function App () {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomeCV} />
				<Route exact path="/make" component={MakeCV} />
				<Route exact path="/show" component={ShowCV} />
			</Switch>
		</BrowserRouter>
	)
}

export default App