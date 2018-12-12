import React, { Component } from 'react';

import './Navigation.css';

import logo from '../../assets/Logo.png';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <header className="header">
            <img src={logo} className="App-logo" alt="logo" id="nav-logo" />
            <div id="main-menu">
              <p className="link" onClick={() => this.handleScrollToElement('#why')}>What we do</p>
              <p className="link" onClick={() => this.handleScrollToElement('#technologies')}>Who we are</p>
              <p className="link" onClick={() => this.handleScrollToElement('#projects')}>Public projects</p>
              <p className="link" onClick={() => this.handleScrollToElement('#partners')}>Our partners</p>
              <button>Contact us</button>
            </div>
          </header>
         );
    }
}
 
export default Navigation;