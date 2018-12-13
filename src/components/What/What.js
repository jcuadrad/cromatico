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
          underline.style.width = '605px';
        }
    }

    render() { 
        return ( 
            <ScrollTrigger onProgress={this.reveal}>
                <div id="why" className="step-up">
                    <h1>We use the emerging experience of VR<span id="underline-what"></span></h1>
                    <p>to create applications and interactions that help our partners transform their message into something unique.</p>
                </div>
            </ScrollTrigger>
         );
    }
}
 
export default What;