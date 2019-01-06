import React, { Component, Fragment } from 'react';
import { LoaderStarWars } from './LoaderStarWars';

export class Starship extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			error: null,
			starships: [],
			nb: 0,
			display: false,
			next: false,
			previous: false,
			page: 1
		};
	}
	
	componentDidMount() {
		this.getStarship(this.state.page);
	}

	getStarship = (page) => {
		fetch('https://swapi.co/api/starships/?page=' + page)
		  .then(res => res.json())
		  .then(
			(res) => {
			  let starships = res.results.map(e => e);
	
			  this.setState({
				nb: res.count,
				starships: starships,
				display: true,
				next: res.next,
				previous: res.previous
			  });
			}, (error) => {
			  alert("Tristesse");
			}
		  );
	  }
	
	  previous = () => {
		if (this.state.page === 1) {
			return false;
		}

		this.setState({
			page: this.state.page - 1,
			display: false
		}, () => this.getStarship(this.state.page));
	  }
	
	  next = () => {
		if ((this.state.page) * 10  >= this.state.nb) {
			return false;
		}

		this.setState({
			page: this.state.page + 1,
			display: false
		}, () => this.getStarship(this.state.page));
	  }
		
	render() {
		return (
			<Fragment>
			{ this.state.display ?
				<div>
					<h3>Nombre de Vaisseau {this.state.nb}</h3>
					<small>Page {this.state.page}</small>
				
					<ul className="list">
						<DisplayStarship starships={this.state.starships}/>
					</ul>

					<div className="btn-group">
						{ this.state.previous && 
							<button onClick={this.previous} className="btn btn-outline-primary">
								Précédent
							</button>
						}

						{ this.state.next && 
							<button onClick={this.next} className="btn btn-outline-success">
								Suivant
							</button>
						}
					</div>
				</div>
				:
				<div>
					<LoaderStarWars/>
				</div>
			}

			
			</Fragment>
		);
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
		return <div></div>;
	}
}