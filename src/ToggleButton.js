import React, { Component } from 'react'

export default class ToggleButton extends Component {
	constructor (props) {
		super(props)
		this.state = { isToggleOn: false }
	}

	handleClick = () => {
		this.setState((prevState) => ({
				isToggleOn: !prevState.isToggleOn
			}
		))
	}

	render () {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'On' : 'Off'}
			</button>)
	}
}
