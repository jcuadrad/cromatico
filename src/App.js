import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="App-logo" alt="logo" id="nav-logo" />
          <div id="main-menu">
            <p>What we do</p>
            <p>Who we are</p>
            <p>Public projects</p>
            <p>Our partners</p>
            <button>Contact us</button>
          </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
