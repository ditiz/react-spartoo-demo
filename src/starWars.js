import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import { Perso } from './star-wars/Perso';
import { Planet } from './star-wars/Planet';
import { Starship } from './star-wars/Starship';

export class StarWars extends Component {
  render() {
    return (
      <div>
        <br/>
        <h2>
          Démo en utilisant l'api <a href="https://swapi.co/" target='_blank' rel="noopener noreferrer">
            SWAPI
          </a>
        </h2>

        <br/>

        <Router>
          <div className="d-flex justify-content-around">

            <ul className="list-group">
              <li className="list-group-item list-group-item-trueDark">
                <Link to="/star-wars/people" >Personnage</Link>
              </li>
              <li className="list-group-item list-group-item-trueDark"
                ><Link to="/star-wars/planet">Planète</Link>
              </li>
              <li className="list-group-item list-group-item-trueDark">
                <Link to="/star-wars/starship">Vaisseau</Link>
              </li>
            </ul>

            <Route path="/star-wars/people" component={Perso}/>
            <Route path="/star-wars/planet" component={Planet}/>
            <Route path="/star-wars/starship" component={Starship}/>

          </div>
        </Router>
      </div>
    )
  }
}
