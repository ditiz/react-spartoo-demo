import React, { Component } from 'react';

import loader1 from '../loader/loader_star-wars1.gif';
import loader2 from '../loader/loader_star-wars2.gif';
import loader3 from '../loader/loader_star-wars3.gif';
import loader4 from '../loader/loader_star-wars4.gif';
import loader5 from '../loader/loader_star-wars5.gif';
import loader6 from '../loader/loader_star-wars6.gif';



export class LoaderStarWars extends Component {
  constructor(props) {
    super(props);
    
    let loaders = [loader1, loader2, loader3, loader4, loader5, loader6];

    this.loader = loaders[Math.floor(Math.random()*loaders.length)];
  }
  
  render() {
    let style = {
      height: '30vmin',
      border: '1px solid #4b5a72'
    };

    return (
      <div>
        <img src={this.loader} style={style} alt='loader'/>
      </div>
      )
    }
  }
