import React, { Component } from 'react';
import loader from '../loader_star-wars.gif';

export class Perso extends Component {
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
    fetch('https://swapi.co/api/people/')
      .then(res => res.json())
      .then(
        (res) => {
          let persos = res.results.map(e => e);

          this.setState({
            nb: res.count,
            persos: persos,
            display: true
          });
        }, (error) => {
          alert("Aie, marche pô");
        }
      )
  }

  render() {
    return (
      <div>
        { this.state.display ?
          <div>
            <h3>Nombre de personnage {this.state.nb}</h3>
            <ul className="list">
              <DisplayPersoName persos={this.state.persos}/>
            </ul>
          </div>
          :
          <div>

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