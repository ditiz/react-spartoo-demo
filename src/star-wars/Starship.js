import React, { Component } from 'react';
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
		return (
			<div>
				<Content data={this.state}/>
				<Btn previous={() => this.previous()} next={() => this.next()} data={this.state}/>
			</div>
		);
	}
}
		
const DisplayStarship = (props) => {
	if (props.starships) {
		return props.starships.map(starship => { 
      return <tr key={starship.name}>
			<td>{starship.name}</td>
			<td>{starship.cost_in_credits}</td>
			<td>{starship.length}</td>
		</tr>;
		});
	} else {
		return <div></div>;
	}
}

const Content = (props) => {
	let data = props.data;

	if (data.display) {
		return <StarshipContent 
			page={data.page} 
			starships={data.starships} 
			nb={data.nb}
		/>;
	} else {
		return <LoaderStarWars/>;
	}
}

const StarshipContent = (props) => (
	<div>
		<h3>Nombre de Vaisseau {props.nb}</h3>
		<br/>

		<table className="table table-hover">
			<thead>
				<tr>
					<th>Nom</th>
					<th>Prix (crédit)</th>
					<th>Taille (m)</th>
				</tr>
			</thead>
			<tbody>
				<DisplayStarship starships={props.starships}/>
			</tbody>
		</table>
	</div>
)

const Btn = (props) => {
	let Previous = () => <></>;
	let Next = () => <></>;

	if (props.data.previous) {
		Previous = PreviousBtn;
	} 

	if (props.data.next) {
		Next = NextBtn;
	}

	return (
		<div className="btn-group">
			<Previous previous={props.previous}/>
			<button className="btn btn-light" disabled>
				Page {props.data.page}
			</button>
			<Next next={props.next}/>
		</div>
	)
}

const PreviousBtn = (props) => (
	<button onClick={props.previous} className="btn btn-outline-primary">
		Précédent
	</button>
)

const NextBtn = (props) => (
	<button onClick={props.next} className="btn btn-outline-success">
		Suivant
	</button>
)