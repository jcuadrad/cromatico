import React, { Component } from 'react';

/* Modules */
import * as scrollToElement from 'scroll-to-element';
import { bubble as Menu } from 'react-burger-menu';

/* Components */
import Navigation from './components/Navigation/Navigation';
import Cover from './components/Cover/Cover';
import Technologies from './components/Technologies/Technologies';
import What from './components/What/What';
import Immersive from './components/Immersive/Immersive';
import Storytelling from './components/Storytelling/Storytelling';
import Beauty from './components/Beauty/Beauty';
import Action from './components/Action/Action';
import Team from './components/Team/Team';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

/* Partners */
import partners from './assets/partners/partners.png';

import './App.css';
import './queries.css';

class App extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }

  }

  handleScrollToElement(id, duration) {
    if (!duration) {
      scrollToElement(id);
      // this.setState({ menuOpen: false });
    } else {
      scrollToElement(id, {
        ease: 'in-sine',
        duration: duration
      });
      // this.setState({ menuOpen: false });
    }
  }

  render() {

    return (
      <div className="App">
        <Menu right noOverlay>
            <p className="link" onClick={() => this.handleScrollToElement('#why')}>What</p>
            <p className="link" onClick={() => this.handleScrollToElement('#technologies')}>Who</p>
            <p className="link" onClick={() => this.handleScrollToElement('#projects')}>Projects</p>
            <p className="link" onClick={() => this.handleScrollToElement('#partners')}>Partners</p>
            <button>Contact us</button>
        </Menu>
        <Navigation handleScrollToElement={this.handleScrollToElement} />
        <Cover handleScrollToElement={this.handleScrollToElement} />
        <What/>
        <h2 id="title-steps">We leverage both time-tested and new tools to create a lasting impression with our work</h2>
        <Storytelling position={this.props.position} />
        <Beauty position={this.props.position} />
        <Immersive />
        <Technologies />
        <Action handleScrollToElement={this.handleScrollToElement} />
        <Team />
        <Projects />
        <div id="partners">
          <h2>Our partners</h2>
          <div className="logos-container">
            <img src={partners} alt="partners"/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
