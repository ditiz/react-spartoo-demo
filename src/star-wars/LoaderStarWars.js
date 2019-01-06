import React, { Component } from 'react';

import loader1 from '../loader/loader_star-wars1.gif';
import loader2 from '../loader/loader_star-wars2.gif';
import loader3 from '../loader/loader_star-wars3.gif';
import loader4 from '../loader/loader_star-wars4.gif';



export class LoaderStarWars extends Component {
  constructor(props) {
    super(props);
    
    let loaders = [loader1, loader2, loader3, loader4];

    this.loader = loaders[Math.floor(Math.random()*loaders.length)];
  }
  
  render() {
    return (
      <div>
        <img src={this.loader} alt='loader'/>
      </div>
      )
    }
  }
