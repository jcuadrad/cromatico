import React, { Component } from 'react';

/* Images */
import logo from './assets/Logo.png';
import cover from './assets/parallax/main-cover.png';
import coverElements from './assets/parallax/main-cover-elements.png';
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
        <div className="cover">
          <h1>We build VR experiences<br/>from your story</h1>
          <p>Whatever you are trying to say, let's say it together</p>
          <button>Learn more</button>
          <div className="parallax-image-container">
            <img src={cover} className="cover-image" alt="cover" />
            <img src={coverElements} className="cover-image" alt="cover" />
          </div>
        </div>
        <div id="why">
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
            <p>and we have mastered the tools for the job.</p>
          </div>
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
      </div>
    );
  }
}

export default App;
