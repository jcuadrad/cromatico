import React, { Component } from 'react';
import './Action.css';

/* Modules */
import ScrollTrigger from 'react-scroll-trigger';

/* Images */
import splotch from '../../assets/action/Why_Background.png';
import geometry from '../../assets/action/geometry.png';

class Action extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    reveal = (progress) => {
        const div = document.getElementById('action');
        if (progress.progress >= 0.3 && !this.state.immersiveAnimated) {
            div.classList.add('reveal');
        }
    }

    render() { 
        return ( 
            <ScrollTrigger onProgress={this.reveal}>
                <div id="action">
                    <img src={splotch} alt="background" id="action-background"/>
                    <div className="purple-strip">
                    <img src={geometry} alt="details"/>
                    </div>
                    <div className="content">
                        <p>We want to build awesome things and we belive <br/> in the power of immersive technologies to deliver messages.</p>
                        <button onClick={() => this.props.handleScrollToElement('#projects')}>Show me how it works</button>
                    </div>
                </div>
            </ScrollTrigger>
         );
    }                         
}
 
export default Action;