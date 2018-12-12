import React, { Component } from 'react';

/* Modules */
import ScrollTrigger from 'react-scroll-trigger';
import * as scrollToElement from 'scroll-to-element';
import { bubble as Menu } from 'react-burger-menu';

/* Components */
import Navigation from './components/Navigation/Navigation';
import Cover from './components/Cover/Cover';

/* Storytelling */
import story from './assets/storytelling/C1.png';
import storyDrawing from './assets/storytelling/C2.png';
import storyRect from './assets/storytelling/C3.png';

/* Immersive */
import immersiveBackground from './assets/immersive/Background.png';
import squareLeft from './assets/immersive/Square-Left.png';
import squareCenter from './assets/immersive/Square-Center.png';
import squareRight from './assets/immersive/Square-Right.png';
import squareShadowLeft from './assets/immersive/SquareShadow-Left.png';
import squareShadowCenter from './assets/immersive/SquareShadow-Center.png';
import squareShadowRight from './assets/immersive/SquareShadow-Right.png';

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
import './queries.css';

class App extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      immersiveAnimated: false,
      menuOpen: false
    }

    this.storyRectangles = null;
    this.storyDrawing = null;
    this.story = null;
  }

  componentDidMount() {
    this.storyRectangles = document.getElementById('storytelling-one');
    this.storyDrawing = document.getElementById('storytelling-two');
    this.story = document.getElementById('story');
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

  move = () => {
    // const rectRectangles = this.state.storyRectangles.getBoundingClientRect();
    // const rectDrawing = this.state.storyDrawing.getBoundingClientRect();
    const rect = this.story.getBoundingClientRect();
    // const moveByX = (this.props.position.x - this.state.storyRectangles.offsetLeft);
    const moveByX = (this.props.position.x - rect.x);
    const moveByXNegative = (rect.x - this.props.position.x);
    // console.log('MoveByX is a result of the mouse x position: ', this.props.position.x, ', minus the elements offset left of: ', this.state.storyRectangles.offsetLeft, ' Rect: ', rect.x);
    this.storyRectangles.style.transform = `translateX(${moveByX/200}%)`;
    this.storyDrawing.style.transform = `translateX(${moveByX/300}%)`;
    this.story.style.transform = `translateX(${moveByXNegative/500}%)`;
  }

  squareJump = (position) => {
    const square = document.getElementById(`square-${position}`);
    const shadow = document.getElementById(`shadow-${position}`);

    square.style.transform = `translateY(-20%)`;
    setTimeout(() => {
      square.style.transform = `translateY(0%)`;
    }, 250);

    shadow.style.transform = `translateX(-1%)`;
    setTimeout(() => {
      shadow.style.transform = `translateX(0%)`;
    }, 250);
  }

  onEnterViewport = (progress, velocity) => {
    if (progress.progress >= 0.4 && !this.state.immersiveAnimated) {
      window.requestAnimationFrame(() => {
        this.squareJump('left');
        setTimeout(() => this.squareJump('right'), 200);
        setTimeout(() => this.squareJump('center'), 400);
      });
      console.log('Focused!', progress.progress);
      this.setState({ immersiveAnimated: true });
    }
  }

  onExitViewport = () => {
    console.log('Out!');
    this.setState({ immersiveAnimated: false });
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
        <Navigation/>
        <Cover handleScrollToElement={this.handleScrollToElement} />
        <div id="why">
          <h1>We use the emerging experience of VR<span></span></h1>
          <p>to create applications and interactions that help our partners <br/>transform their message into something unique.</p>
        </div>
        <div id="storytelling">
          <div className="left">
            <h2>Storytelling</h2>
            <p>Leverage story to fully engage <br/>and reach your audience.</p>
          </div>
          <div className="story-container" onMouseMove={() => this.move()}>
            <img src={story} alt="cover" id="story"/>
            <img src={storyDrawing} alt="cover" id="storytelling-two"/>
            <img src={storyRect} alt="cover" id="storytelling-one"/>
          </div>
        </div>
        <div id="beauty">
          <img src={beauty} alt="beauty"/>
          <div className="right">
            <h2>Beauty</h2>
            <p>VR comes through our eyes and we <br/>must focuse on delivering the most <br/>beautiful products possible</p>
          </div>
        </div>
        <ScrollTrigger onProgress={this.onEnterViewport} onExit={this.onExitViewport}>
          <div id="immersive">
            <div className="left">
              <h2>Immersive Technology</h2>
              <p>Few platforms allow your users to immserve themselves fully and be 100% enaged with your message.</p>
            </div>
            <div className="immersive-container">
              <img src={immersiveBackground} alt="cover" id="immersive-background"/>
              <img src={squareLeft} alt="cover" id="square-left"/>
              <img src={squareShadowLeft} alt="cover" id="shadow-left"/>
              <img src={squareRight} alt="cover" id="square-right"/>
              <img src={squareShadowRight} alt="cover" id="shadow-right"/>
              <img src={squareCenter} alt="cover" id="square-center"/>
              <img src={squareShadowCenter} alt="cover" id="shadow-center"/>
              <div id="left" onMouseOver={() => this.squareJump('left')}></div>
              <div id="right" onMouseOver={() => this.squareJump('right')}></div>
              <div id="center" onMouseOver={() => this.squareJump('center')}></div>
            </div>
          </div>
        </ScrollTrigger>
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
              <button onClick={() => this.handleScrollToElement('#projects')}>Show me how it works</button>
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
                  <img src={featured} alt="project"/>
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
                  <img src={featured} alt="project"/>
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
                  <img src={featured} alt="project"/>
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
