import React, { Component } from 'react';
import './Immersive.css';

/* Modules */
import ScrollTrigger from 'react-scroll-trigger';

/* Images */
import immersiveBackground from '../../assets/immersive/Background.png';
import squareLeft from '../../assets/immersive/Square-Left.png';
import squareCenter from '../../assets/immersive/Square-Center.png';
import squareRight from '../../assets/immersive/Square-Right.png';
import squareShadowLeft from '../../assets/immersive/SquareShadow-Left.png';
import squareShadowCenter from '../../assets/immersive/SquareShadow-Center.png';
import squareShadowRight from '../../assets/immersive/SquareShadow-Right.png';

class Immersive extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            immersiveAnimated: false,
         }
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
        if (progress.progress >= 0.3 && !this.state.immersiveAnimated) {
            this.setState({ immersiveAnimated: true });
            this.reveal();
            setTimeout(() => {
                window.requestAnimationFrame(() => {
                    this.squareJump('left');
                    setTimeout(() => this.squareJump('right'), 200);
                    setTimeout(() => this.squareJump('center'), 400);
                });
                // console.log('Focused!', progress.progress);
            }, 550)
        }
    }

    onExitViewport = () => {
        // console.log('Out!');
        this.setState({ immersiveAnimated: false });
    }

    reveal = () => {
        const div = document.getElementById('immersive');
        div.classList.add('reveal');
    }

    render() { 
        return ( 
            <ScrollTrigger onProgress={this.onEnterViewport} onExit={this.onExitViewport}>
                <div id="immersive">
                    <div className="left">
                    <h2>Immersive Technologies</h2>
                    <p>We love to use VR, AR and the Web because few platforms allow your users to immserve themselves fully and be 100% enaged with your message.</p>
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
         );
    }
}
 
export default Immersive;