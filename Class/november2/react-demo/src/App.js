import React, { Component } from 'react';
// import {username, lastname} from './Play'
// import * as person from './Play'
import developer from './Play'
// import {username as firstname, lastname} from './Play'
import './App.css';

function SaySomething(props) {
  return <p>{props.text}</p>
}

const FooComponent = props => {
  return (
    <div style={{ color: 'red', padding: '30px', border: '2px dashed black' }}>
      <p>{props.text}</p>
    </div>
  )
}

class App extends Component {
  randomText() {
    return `Random Text - ${developer.username} ${developer.lastname}`
  }
  render() {
    return (
      <div>
        <h1>Hello World..!</h1>
        <h2>{this.randomText()}</h2>
        <SaySomething text='Lorem Ipsum dolar sit amet' />
        <FooComponent text='Lorem Ipsum dolar sit amet' />
      </div>
    )
  }
}

export default App;