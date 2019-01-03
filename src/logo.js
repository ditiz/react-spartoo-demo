import React, { Component } from 'react'
import logo from './logo.svg';
import spartooLogoUrl from './spartoo.png';

class Logo extends Component {
  render() {
    return (
      <div className="logos">
        <img src={spartooLogoUrl} className="spartoo-logo logo" alt="logo" />
        <img src={logo} className="App-logo logo" alt="logo" />
      </div>
    )
  }
}

export default Logo;