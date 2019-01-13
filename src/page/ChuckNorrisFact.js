import React, { Component } from 'react'

export class ChuckNorrisFact extends Component {

  state = {
    fact: '',
    percent: 100,
    loop: null
  }

  componentDidMount() {
    this.getFact();

    setInterval(() => {
      console.log(this.state.percent);
      
      if (this.state.percent > 0) {
        this.setState({
          percent: this.state.percent - 1
        })
      } else {
        new Promise((resolve, reject) => {
          this.getFact();
          setTimeout(resolve(true), 5000)
        }).then(this.setState({
          percent: 100
        }));
      }
    },100);
  }

  componentWillUnmount() {

  }

  getFact = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then (res => res.json())
    .then(res => {
      this.setState({
        fact: res.value
      });
      }, (error) => {
        alert('Chuck ne veut pas entrer en contact avec vous');
      }
    );
  }

  render() {
    return (
      <div>
        <p>{this.state.fact}</p>
        <div className="progress" style={{'width': '25%', 'margin': 'auto'}}>
          <div 
            className="progress-bar" 
            role="progressbar" 
            style={{'width': this.state.percent + '%'}}
          ></div>
        </div>
      </div>
    )
  }
}
