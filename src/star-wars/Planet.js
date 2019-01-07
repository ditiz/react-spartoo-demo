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
		);
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
		return (
			<Fragment>
				{ this.state.display ?
				<div>
					<h3>Nombre de planète {this.state.nb}</h3>
					<br/>
          
					<table className="table table-hover">
            <thead className="">
              <th>Nom</th>
              <th>Taille (km)</th>
              <th>Climat</th>
            </thead>
            <tbody>
              <DisplayPlanet planets={this.state.planets}/>
              </tbody>
          </table>

					<div className="btn-group">
						{ this.state.previous && 
							<button onClick={this.previous} className="btn btn-outline-primary">
								Précédent
							</button>
            }
            
            <button className="btn btn-light" disabled>
              Page {this.state.page}
            </button>

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
		)
	}
}
		
const DisplayPlanet = (props) => {
	if (props.planets) {
		return props.planets.map(planet => {
      return <tr>
        <td>{planet.name}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
      </tr>;
		});
	} else {
		return <div></div>
	}
}