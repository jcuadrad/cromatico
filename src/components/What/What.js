import React, { Component } from 'react';

import './What.css';

/* Modules */
import ScrollTrigger from 'react-scroll-trigger';

class What extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            revealed: false
         }
    }

    reveal = (progress) => {
        const div = document.getElementById('why');
        const underline = document.getElementById('underline-what');

        if (progress.progress >= 0.2 && !this.state.revealed) {
          div.classList.add('reveal');
          this.setState({ revealed: true });
          if (window.innerWidth > 578) {
            underline.style.width = '540px';
          } else {
            underline.style.width = '225px';
          }
        }
    }

    render() { 
        return ( 
            <ScrollTrigger onProgress={this.reveal}>
                <div id="why" className="step-up">
                    <div className="underline-container">
                        <h1>We build interactive experiences.</h1>
                        <span id="underline-what"></span>
                    </div>
                    <p>Using cutting-edge technologies, we help our partners transform their message into something unique.</p>
                    {/* {/* <h1>We leverage both time-tested and new tools to create a lasting impression with our work</h1> */}
                </div>
            </ScrollTrigger>
         );
    }
}
 
export default What;