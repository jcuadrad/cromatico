import React, { Component } from 'react';
import * as scrollToElement from 'scroll-to-element';
import { slide as Menu } from 'react-burger-menu';

/* Images */
import logo from './assets/Logo.png';

import cover from './assets/parallax/Capa1.png';
import hoverEl from './assets/parallax/Capa3.png';
import scorllEl from './assets/parallax/Capa2.png';

import story from './assets/story.png';
import beauty from './assets/beauty.png';
import immersive from './assets/immersive.png';

/* Logos */
import unity from './assets/tech/Unity.png';
import unreal from './assets/tech/Unreal.png';
import oculus from './assets/tech/Oculus.png';
import htc from './assets/tech/Htc.png';
import js from './assets/tech/js.png';
import aframe from './assets/tech/A-frame.png';
import reactLogo from './assets/tech/React.png';
import arkit from './assets/tech/arkit.png';

import splotch from './assets/action/Why_Background.png';
import geometry from './assets/action/geometry.png';

/* Team */ 
import team1 from './assets/team/team-1.png';
import team2 from './assets/team/team-2.png';
import team3 from './assets/team/team-3.png';
import instagram from './assets/team/Instagram.png'

/* Projects */
import featured from './assets/projects/feature-project.png';

/* Partners */
import partners from './assets/partners/partners.png';

/* Footer */
import facebook from './assets/footer/facebook.png';
import twitter from './assets/footer/twitter.png';
import whiteLogo from './assets/footer/footer-logo.png';

import './App.css';

class App extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      transform: 0,
      coverElements: null
    }
    this.myRef = React.createRef();
    this.what = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    this.setState({ coverElements: document.getElementById("cover-elements") });
     if (this.state.coverElements) {
       console.log(this.state.coverElements.style.transform);
     }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = () => {
    let windowScroll = window.scrollY;
    let itemTranslate = -1 * windowScroll;

    this.setState({
      transform: itemTranslate
    });
  }

  handleScrollToElement(id) {
    scrollToElement(id);
  }

  move = () => {
    // console.log('Y: ', this.props.position.y, ', X: ', this.props.position.x);
    const div =  document.getElementById("cover-elements");
    const moveByY = (this.props.position.y - this.state.coverElements.offsetTop) + this.state.coverElements.clientHeight/2;
    // console.log('MoveByY is a result of the mouse y position: ', this.props.position.y, ', minus the elements offset top of: ', this.state.coverElements.offsetTop, ', plus the client height divided by two: ', this.state.coverElements.clientHeight/2);
    const moveByX = (this.props.position.x - this.state.coverElements.offsetLeft);
    // console.log('MoveByX is a result of the mouse x position: ', this.props.position.x, ', minus the elements offset left of: ', this.state.coverElements.offsetLeft);
    div.style.transform = `translate(${moveByX/300}%, ${-moveByY/300}%)`;
  }

  render() {
    return (
      <div className="App">
        <Menu right noOverlay>
            <p className="link" onClick={() => this.handleScrollToElement('#why')}>What we do</p>
            <p className="link" onClick={() => this.handleScrollToElement('#technologies')}>Who we are</p>
            <p className="link" onClick={() => this.handleScrollToElement('#projects')}>Public projects</p>
            <p className="link" onClick={() => this.handleScrollToElement('#partners')}>Our partners</p>
            <button>Contact us</button>
        </Menu>
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
        <div className="cover">
          <h1>We build VR experiences<br/>from your story</h1>
          <p>Whatever you are trying to say, let's say it together</p>
          <button>Learn more</button>
          <div className="parallax-image-container">
            <img src={cover} className="cover-image" alt="cover" />
            <img src={scorllEl} alt="cover" style={{transform: 'translateY(' + this.state.transform / 10 + 'px)'}} ref={this.myRef} id="scroll"/>
            <img src={hoverEl} alt="cover" style={{transform: 'translateX(' + this.state.transform / 25 + 'px)'}} ref={this.myRef}/>
          </div>
        </div>
        <div id="why" ref={this.what}>
          <h1>We use the emerging experience of VR<span></span></h1>
          <p>to create applications and interactions that help our partners <br/>transform their message into something unique.</p>
        </div>
        <div id="storytelling">
          <div className="left">
            <h2>Storytelling</h2>
            <p>Leverage story to fully engage <br/>and reach your audience.</p>
          </div>
          <img src={story} alt="story"/>
        </div>
        <div id="beauty">
          <img src={beauty} alt="beauty"/>
          <div className="right">
            <h2>Beauty</h2>
            <p>VR comes through our eyes and we <br/>must focuse on delivering the most <br/>beautiful products possible</p>
          </div>
        </div>
        <div id="immersive">
          <div className="left">
            <h2>Immersive Technology</h2>
            <p>Few platforms allow your users to immserve themselves fully and be 100% enaged with your message.</p>
          </div>
          <img src={immersive} alt="immersive"/>
        </div>
        <div id="technologies">
          <div className="title">
            <h1>Obssesed with tech<span></span></h1>
          </div>
          <p>We have mastered the tools for the job.</p>
          <p>We develop with state of the art frameworks for all the leading platforms in the world.</p>
          <div className="grid">
            <img src={unity} alt="unity"/>
            <img src={unreal} alt="unreal"/>
            <img src={oculus} alt="oculus"/>
            <img src={htc} alt="htc"/>
            <img src={js} alt="js"/>
            <img src={aframe} alt="aframe"/>
            <img src={reactLogo} alt="react"/>
            <img src={arkit} alt="arkit"/>
          </div>
        </div>
        <div id="action">
          <img src={splotch} alt="background" id="action-background"/>
          <div className="purple-strip">
            <img src={geometry} alt="details"/>
          </div>
          <div className="content">
              <p>We want to build awesome things and we belive <br/> in the power of immersive technologies to deliver messages.</p>
              <button>Show me how it works</button>
          </div>
        </div>
        <div id="team">
          <div className="description">
            <h2>More than a company, <br/>we are a community.</h2>
            <p>A team full of multi-disciplinary artsits, programmers and creatives <br/>that wanted to experiment with new mediums.</p>
          </div>
          <div className="profiles">
            <div className="member">
              <img src={team1} alt="team-member"/>
              <div className="basic-info">
                <h3>Juan Cuadra</h3>
                <p>Pizzologo</p>
              </div>
              <div className="detail-profile">
                <p className="first-line">Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <div className="social-icons">
                  <img src={instagram} alt="instagram"/>
                </div>
              </div>
            </div>
            <div className="member">
              <img src={team2} alt="team-member"/>
              <div className="basic-info">
                <h3>Juan Cuadra</h3>
                <p>Lenguologo</p>
              </div>
              <div className="detail-profile">
                <p className="first-line">Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <div className="social-icons">
                  <img src={instagram} alt="instagram"/>
                </div>
              </div>
            </div>
            <div className="member">
              <img src={team3} alt="team-member"/>
              <div className="basic-info">
                <h3>Juan Cuadra</h3>
                <p>Risologo</p>
              </div>
              <div className="detail-profile">
                <p className="first-line">Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <p>Lorem Ipsum Bla bla bla</p>
                <div className="social-icons">
                  <img src={instagram} alt="instagram"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="projects">
            <div className="title">
              <h2>Our <br/>Projects</h2>
            </div>
            <div className="project-grid">
              <div className="left-col">
                <div className="featured-project">
                  <img src={featured} alt="project-image"/>
                  <div className="project-info">
                    <div className="project-title">
                      <p>Web VR</p>
                      <h2>Project ABC</h2>
                    </div>
                    <div className="project-description">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus non ante sed lacinia. Sed nulla lorem, 
                        accumsan sed libero quis, euismod fermentum nunc. Cras posuere ac est a porttitor. Aenean eget iaculis massa. 
                        Praesent scelerisque libero laoreet, vulputate neque sit amet, viverra metus. Aenean ut lectus id lorem posuere 
                        placerat eget ac neque.</p>
                        <div className="button">
                          <div className="button-background"></div>
                          <div className="button-text">
                            <p>Show me more</p>
                            <p>→</p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="third-project">
                  <img src={featured} alt="project-image"/>
                  <div className="project-info">
                    <div className="project-title">
                      <p>VR</p>
                      <h2>Project VRFX</h2>
                    </div>
                    <div className="project-description">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="button">
                          <div className="button-background"></div>
                          <div className="button-text">
                            <p>Show me more</p>
                            <p>→</p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-col">
                <div className="second-project">
                  <img src={featured} alt="project-image"/>
                  <div className="project-info">
                    <div className="project-title">
                      <p>3D</p>
                      <h2>Project ZYX</h2>
                    </div>
                    <div className="project-description">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus non ante sed lacinia. Sed nulla lorem.</p>
                        <div className="button">
                          <div className="button-background"></div>
                          <div className="button-text">
                            <p>Show me more</p>
                            <p>→</p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="description">
                  <h3>Begin your journey</h3>
                  <p>Create 3D and VR experiences that engage your audience in a new and exciting way while delivering their messages as strongly as possible.</p>
                  <div className="button">
                    <div className="button-background teal"></div>
                    <div className="button-text">
                      <p>Show me more</p>
                      <p>→</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div id="partners">
          <h2>Our partners</h2>
          <div className="logos-container">
            <img src={partners} alt="partners"/>
          </div>
        </div>
        <div id="footer">
          <div id="footer-content">
            <div className="footer-info">
              <div id="social-media">
                <h2>Let's make <br/>something great together!</h2>
                <span></span>
                <div className="social-logos">
                  <img src={facebook} alt="facebook"/>
                  <img src={twitter} alt="twitter"/>
                  <img src={instagram} alt="instagram"/>
                </div>
              </div>
              <div id="vitals-container">
                <div className="vitals">
                  <p>Meet</p>
                  <h4>Managua, Nicaragua</h4>
                </div>
                <div className="vitals">
                  <p>Write</p>
                  <h4>hello@cromatico.io</h4>
                </div>
                <div className="vitals">
                  <p>Talk</p>
                  <h4>+(505) 8548-9394</h4>
                </div>
              </div>
            </div>
            <div className="footer-logo">
              <img src={whiteLogo} alt="logo"/>
              <div id="copyright">
                <p>© 2018 Cromatico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
