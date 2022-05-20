import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Calculator from './Calculator'
import App from './App'
import Page from './Page'
import ToggleButton from './ToggleButton'
import LoginControl from './LoginControl'
import Clock from './Clock'

ReactDOM.render(
	<div>
		<Clock/>
		<Calculator/>
		<LoginControl/>
		<ToggleButton/>
		<Page/>
		<App/>
	</div>, document.getElementById('root'))
