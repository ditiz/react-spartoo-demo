import React, { Component, Fragment } from 'react'

export class Planet extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			error: null,
			persos: [],
			nb: 0,
			display: false
		};
	}
	
	componentDidMount() {
		fetch('https://swapi.co/api/planets/')
		.then(res => res.json())
		.then(
			(res) => {
				let planets = res.results;
				
				this.setState({
					nb: res.count,
					planets: planets,
					display: true
				});
			}, (error) => {
				alert("Winston, nous avons un problème");
			}
			)
		}
		
		render() {
			return (
				<Fragment>
					{ this.state.display ?
					<div>
						<h3>Nombre de planète {this.state.nb}</h3>
						
						<ul>
							<DisplayPlanet planets={this.state.planets}/>
						</ul>
					</div>
					:
					<div>ça charge</div>
					}
				</Fragment>
			)
		}
	}
		
		const DisplayPlanet = (props) => {
			if (props.planets) {
				return props.planets.map(planet => {
					return <li key={planet.name}>
						{planet.name} | taille: {planet.diameter} | climat: {planet.climate}
					</li>
				});
			} else {
				return <div></div>
			}
		}