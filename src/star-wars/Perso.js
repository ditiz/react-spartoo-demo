import React, { Component } from 'react';
import { LoaderStarWars } from './LoaderStarWars';

export class Perso extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      persos: [],
      nb: 0,
      display: false,
      next: false,
      previous: false,
      page: 1
    };
  }

  componentDidMount() {
    this.getPersos(this.state.page);
  }

  getPersos = (page) => {
    fetch('https://swapi.co/api/people/?page=' + page)
      .then(res => res.json())
      .then(
        (res) => {
          let persos = res.results.map(e => e);

          this.setState({
            nb: res.count,
            persos: persos,
            display: true,
            next: res.next,
            previous: res.previous
          });
        }, (error) => {
          alert("Aie, marche pô");
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
    }, () => this.getPersos(this.state.page));
  }

  next = () => {
    if ((this.state.page) * 10  >= this.state.nb) {
      return false;
    }

    this.setState({
      page: this.state.page + 1,
      display: false
    }, () => this.getPersos(this.state.page));
  }

  render() {
    return (
      <div>
        { this.state.display ?
          <div>
            <h3>Nombre de personnage {this.state.nb}</h3>
            <small>Page {this.state.page}</small>
            <ul className="list">
              <DisplayPersoName persos={this.state.persos}/>
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
      </div>
    )
  }
}

const DisplayPersoName = (props) => {
  return props.persos.map(perso => {
    return <li key={perso.name}>
      Nom: {perso.name} | Taille: {perso.height}m | poid: {perso.mass}kg
    </li>
  });
}