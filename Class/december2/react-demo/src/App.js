import React, { Component } from 'react';
import './App.css';

export const inc = (prev) => {
  return {
    value: prev.value + 1
  }
}

export const dec = (prev) => {
  return {
    value: prev.value - 1
  }
}

export const Value = ({value}) => <h3> { value } </h3>

class App extends Component {
  state = {
    value: 0
  }

  onMinus = () => {
    this.setState(dec)
  }

  onPlus = () => {
    this.setState(inc)
  }

  render() {
    return (
      <div className="App">
        <h2>TDD Demo</h2>
        <Value value={this.state.value}/>
        <button onClick={this.onMinus}>-</button>
        <div>{this.state.value}</div>
        <button onClick={this.onPlus}>+</button>
      </div>
    );
  }
}

export default App;
