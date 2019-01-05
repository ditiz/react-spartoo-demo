import React, { Component } from 'react'

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
          let persos = res.results.map(e => {
            return e.name
          });

          this.setState({
            nb: res.count,
            persos: persos
          });
        }, (error) => {
          alert("Aie, marche pô");
        }
      )
  }

  render() {
    return (
      <div>
        <h3>Nombre de personnage {this.state.nb}</h3>

        <ul>
          <DisplayPersoName persos={this.state.persos}/>
        </ul>
      </div>
    )
  }
}

const DisplayPersoName = (props) => {
  return props.persos.map(name => {
    return <li key={name}>{name}</li>
  });
}