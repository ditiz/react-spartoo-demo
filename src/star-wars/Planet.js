import React, { Component, Fragment } from 'react'
import { LoaderStarWars } from './LoaderStarWars';

export class Planet extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			error: null,
			planets: [],
			nb: 0,
			display: false,
			next: false,
			previous: false,
			page: 1
		};
	}

	componentDidMount() {
		this.getPlanet(this.state.page);
	}

	getPlanet = (page) => {
		fetch('https://swapi.co/api/planets/?page=' + page)
		  .then(res => res.json())
		  .then(
			(res) => {
			  let planets = res.results.map(e => e);
	
			  this.setState({
				nb: res.count,
				planets: planets,
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
		}, () => this.getPlanet(this.state.page));
	}

	next = () => {
		if ((this.state.page) * 10  >= this.state.nb) {
			return false;
		}

		this.setState({
			page: this.state.page + 1,
			display: false
		}, () => this.getPlanet(this.state.page));
	}
		
	render() {

		let NextBtn = () => <></>;
    let PreviousBtn = () => <></>;
		let Render = () => <></>;	

		if (this.state.previous) {
			PreviousBtn = () =>  <button onClick={this.previous} className="btn btn-outline-primary">
				Précédent
			</button>;
		}

    if (this.state.next) {
      NextBtn = () => <button onClick={this.next} className="btn btn-outline-success">
        Suivant
      </button>;
		}
		
		if (this.state.display) {
			Render = () => <div>
				<h3>Nombre de planète {this.state.nb}</h3>
				<br/>

				<table className="table table-hover">
					<thead>
						<tr>
							<th>Nom</th>
							<th>Taille (km)</th>
							<th>Climat</th>
						</tr>
					</thead>
					<tbody>
						<DisplayPlanet planets={this.state.planets}/>
						</tbody>
				</table>

				<div className="btn-group">
					<PreviousBtn/>
					<button className="btn btn-light" disabled>
						Page {this.state.page}
					</button>
					<NextBtn/>
				</div>
			</div>;
		} else {
			Render = () => <div>
				<LoaderStarWars/>
			</div>;
		}

		return (
			<Fragment>
				<Render/>
			</Fragment>
		)
	}
}
		
const DisplayPlanet = (props) => {
	if (props.planets) {
		return props.planets.map(planet => {
      return <tr key={planet.name}>
        <td>{planet.name}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
      </tr>;
		});
	} else {
		return <div></div>
	}
}