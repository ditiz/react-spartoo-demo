import React, { Component, Fragment } from 'react';
import Logo from './logo';
import './App.css';
import './bootstrap.min.css';
import {
  Link,
  BrowserRouter as Router
} from 'react-router-dom';

import { AppRouting } from './AppRouting'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Logo className/>

         <Router>
          <Fragment>
            <nav className="navbar navbar-dark bg-dark justify-content-center">
              <Link to='/Page1' className='navbar-brand'>Page 1</Link>
              <Link to='/Page2' className='navbar-brand'>Page 2</Link>
              <Link to='/Page3' className='navbar-brand'>Page 3</Link>
              <Link to='/star-wars' className='navbar-brand'>Star wars</Link>
            </nav>

            <AppRouting/>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
