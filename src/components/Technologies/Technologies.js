import React, { Component } from 'react';

import './Technologies.css';

/* Modules */
import ScrollTrigger from 'react-scroll-trigger'

/* Logos */
import unity from '../../assets/tech/Unity.png';
import unreal from '../../assets/tech/Unreal.png';
import oculus from '../../assets/tech/Oculus.png';
import htc from '../../assets/tech/Htc.png';
import js from '../../assets/tech/js.png';
import aframe from '../../assets/tech/A-frame.png';
import reactLogo from '../../assets/tech/React.png';
import arkit from '../../assets/tech/arkit.png';

class Technologies extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    reveal = (progress) => {
        const div = document.getElementById('technologies');
        const underline = document.getElementById('underline-tech');
        if (progress.progress >= 0.3 && !this.state.immersiveAnimated) {
          div.classList.add('reveal');
          underline.style.width = '221px';
        }
    }

    render() { 
        return ( 
            <ScrollTrigger onProgress={this.reveal}>
                <div id="technologies">
                    <div className="title">
                        <h1>Obssesed with tech<span id="underline-tech"></span></h1>
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
            </ScrollTrigger>
         );
    }
}
 
export default Technologies;