import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

export default class App extends Component {
	state = {
		characters: [],
	}

	removeCharacter = (index) => {
		const { characters } = this.state

		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index
			}),
		})
	}

	handleSubmit = (character) => {
		this.setState({
				characters: [...this.state.characters, character]
			}
		)
	}

	componentDidMount () {
		fetch('./data.json')
			.then((result) => result.json())
			.then((result) => {
				this.setState({
					characters: result.data,
				})
			})
	}


	render () {
		const {characters} = this.state
		return (
			<div className="container">
				<Table characters={characters} removeCharacter={this.removeCharacter}/>
				<Form handleSubmit={this.handleSubmit}/>
			</div>
		)
	}
}

