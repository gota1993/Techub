import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { ProtectedRoute } from './route/ProtectedRoute'
import './App.css';
import Data from './db/data.json'
import { IndexPage } from './components/IndexPage'
import { ContactPage } from './components/ContactPage'
import LoginPage from './components/LoginPage'
import { ProfilePage } from './components/ProfilePage'

class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">
          <ul className="menu">
            <li className="menu--item"> <Link to="/">Home</Link> </li>
            <li className="menu--item"> <Link to="/contact">Contact</Link> </li>
            <li className="menu--item"> <Link to="/login">Login</Link> </li>
            <li className="menu--item"> <Link to="/profile">Profile</Link> </li>
          </ul>
          <Route path="/" exact
            render={() => (<IndexPage title={Data.index.title} desc={Data.index.desc} />)} />

          <Route path="/contact"
            render={() => (<ContactPage title={Data.index.title} desc={Data.index.desc} />)} />

          <Route path="/login" component={LoginPage} />
          <ProtectedRoute path="/profile" component={ProfilePage} />

        </div>

      </Router>
    );
  }
}

export default App;
