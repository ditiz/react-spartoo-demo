import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom';

import { Page1 } from './page/page1';
import { Page2 } from './page/page2';
import { Page3 } from './page/page3';

export class Routing extends Component {
  render() {
    return (
      <Fragment>
          <Route path="/" exact component={Page1}/>
          <Route path="/page1" exact component={Page1}/>
          <Route path="/page2" exact component={Page2}/>
          <Route path="/page3" exact component={Page3}/>
      </Fragment>
    )
  }
}
