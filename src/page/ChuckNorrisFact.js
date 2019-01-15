import React, { Component } from 'react'

export class ChuckNorrisFact extends Component {

  state = {
    fact: '',
    percent: 100,
    loop: null,
    time: 0
  }

  componentDidMount() {
    this.getFact().then(() => this.loop());
  }

  componentWillUnmount() {
    clearInterval(this.state.loop);
  }

  getFact = async function() {
    await fetch('https://api.chucknorris.io/jokes/random')
    .then (res => res.json())
    .then(res => {
      this.setState({
        fact: res.value,
        time: res.value.length
      });
      }, (error) => {
        alert('Chuck ne veut pas entrer en contact avec vous');
      });
  }

  loop = () => {
    const time = this.state.time !== 0 ? 300 : this.state.time ;

    this.setState({
      loop : setInterval(() => {
        
        if (this.state.percent > 0) {
          this.setState({
            percent: this.state.percent - 1
          })
        } else {
          this.getFact().then(
            this.setState({
              percent: 100
            })
          ); 
        }
      }, time * 0.4)
    });
  }

  render() {
    return (
      <Box>
        <Fact>{this.state.fact}</Fact>
        <div className="progress" style={{'width': '25%', 'margin': 'auto'}}>
          <div 
            className="progress-bar" 
            role="progressbar" 
            style={{'width': this.state.percent + '%'}}
          ></div>
        </div>
      </Box>
    )
  }
}

const Box = (props) => {
  const style = {
    'width': '60%',
    'margin': 'auto'
  }

  return <div style={style}>
    {props.children}
  </div>
}

const Fact = (props) => {
  const style = {
    padding: "20px"
  }

  return <div style={style}>
    {props.children}
  </div>
};