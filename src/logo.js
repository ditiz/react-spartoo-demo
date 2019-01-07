import React, { Component } from 'react'
import logo from './logo.svg';
import spartooLogoUrl from './spartoo.png';

class Logo extends Component {
  constructor(props) {
    super(props);

    this.spartooLogoRef = React.createRef();    
    this.reactLogoRef = React.createRef();    
  }

  rotate = (e) => {    
      e.target.classList.toggle('rotate-too-fast');
  }

  render() {
    return (
      <div className="logos">
        <img src={spartooLogoUrl} onClick={this.rotate} className="App-logo " alt="logo" />
        <img src={logo} onClick={(e) =>this.rotate(e)} className="App-logo rotate-slow" alt="logo" />
      </div>
    )
  }
}

export default Logo;