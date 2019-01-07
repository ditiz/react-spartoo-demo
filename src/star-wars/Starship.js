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
		  .then((res) => {
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
		let NextBtn, PreviousBtn, Render;

		if (this.state.previous || true) {
			PreviousBtn = () =>  <button onClick={this.previous} className="btn btn-outline-primary">
				Précédent
			</button>;
		}

    if (this.state.next || true) {
      NextBtn = () => <button onClick={this.next} className="btn btn-outline-success">
        Suivant
      </button>;
    }

    if (this.state.display) {
      Render = () => <div>
        <h3>Nombre de Vaisseau {this.state.nb}</h3>
        <small>Page {this.state.page}</small>

        <table className="table table-hover">
            <thead className="">
              <th>Nom</th>
              <th>Prix (crédit)</th>
              <th>Taille (m)</th>
            </thead>
            <tbody>
             <DisplayStarship starships={this.state.starships}/>
            </tbody>
          </table>

        <div className="btn-group">
          <PreviousBtn/>
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
		);
	}
}
		
const DisplayStarship = (props) => {
	if (props.starships) {
		return props.starships.map(starship => { 
      return <tr>
        <td>{starship.name}</td>
        <td>{starship.cost_in_credits}</td>
        <td>{starship.length}</td>
      </tr>;
		});
	} else {
		return <div></div>;
	}
}