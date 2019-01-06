import React, { Component, Fragment } from 'react';
import { LoaderStarWars } from './LoaderStarWars';

export class Starship extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			error: null,
			starships: [],
			nb: 0,
			display: false
		};
	}
	
	componentDidMount() {
		fetch('https://swapi.co/api/starships/')
		.then(res => res.json())
		.then(
			(res) => {
				let starships = res.results;
				
				this.setState({
					nb: res.count,
					starships: starships,
					display: true
				});
			}, (error) => {
				alert("Tristesse");
			}
			)
		}
		
		render() {
			return (
				<Fragment>
					{ this.state.display ?
					<div>
						<h3>Nombre de Vaisseau {this.state.nb}</h3>
						
						<ul className="list">
							<DisplayStarship starships={this.state.starships}/>
						</ul>
					</div>
					:
					<div>
						<LoaderStarWars/>
                    </div>
					}
				</Fragment>
			)
		}
	}
		
		const DisplayStarship = (props) => {
			if (props.starships) {
				return props.starships.map(starship => {
					return <li key={starship.name}>
						{starship.name} | 
                        Prix: {starship.cost_in_credits} crédit | 
                        taille: {starship.length}m
					</li>
				});
			} else {
				return <div></div>
			}
		}