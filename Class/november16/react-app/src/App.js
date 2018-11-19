import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Section1 from './Components/Main/Section1/Section1'
import Section2 from './Components/Main/Section2/Section2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <Section1/>
          <Section2/>
        </main>
      </div>
    );
  }
}

export default App;
