import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import { Page1 } from './page/page1';
import { Page2 } from './page/page2';
import { Page3 } from './page/page3';
import { StarWars } from './starWars';

export class AppRouting extends Component {
  render() {
    return (
      <Fragment>
          <Route path="/" exact component={Page1}/>
          <Route path="/page1" component={Page1}/>
          <Route path="/page2" component={Page2}/>
          <Route path="/page3" component={Page3}/>
          <Route path="/star-wars" component={StarWars}/>
      </Fragment>
    )
  }
}
