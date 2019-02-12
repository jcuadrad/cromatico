import React, { Component } from 'react';
import './Beauty.css';

/* Modules */
import ScrollTrigger from 'react-scroll-trigger';

/* Images */
import beautyBG from '../../assets/beauty/Background.png';
import beautyMain from '../../assets/beauty/Main.png';
import circle from '../../assets/beauty/rotate-circle.png';
import triangle from '../../assets/beauty/rotate-triangle.png';

class Beauty extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            rotation: 360,
            revealed: false,
            beautyAnimated: false
        }

        this.splotch = null;
        this.triangle = null;
        this.circle = null;
    }
     
    componentDidMount() {
        this.splotch = document.getElementById('beauty-bg');
        this.triangle = document.getElementById('triangle');
        this.circle = document.getElementById('circle');
    }

    skewSplotch = () => {
        const xSkew = this.props.position.x/400 - 4;
        const ySkew = this.props.position.y/200 - 2;

        // console.log(xSkew);

        this.splotch.style.transform = `skew(${ySkew}deg, ${xSkew}deg)`;
    }

    rotate = (element) => {
        // console.log('rotating!')
        if (element === 'triangle') {
            this.triangle.style.transform = `rotate(${this.state.rotation}deg)`;
            if (this.state.rotation >= 2000) {
                this.setState({ rotation: 0 });
            } else {
                this.setState({ rotation: this.state.rotation + 360 });
            }
        } else {
            this.circle.style.transform = `rotate(${this.state.rotation}deg)`;
            if (this.state.rotation >= 2500) {
                this.setState({ rotation: 0 });
            } else {
                this.setState({ rotation: this.state.rotation + 360 });
            }
        }
    }

    onEnterViewport = (progress, velocity) => {
        if (progress.progress >= 0.3 && !this.state.beautyAnimated) {
            this.setState({ beautyAnimated: true });
            this.reveal();
            setTimeout(() => {
                window.requestAnimationFrame(() => {
                    this.rotate('triangle');
                    setTimeout(() => this.rotate(), 200);
                });
                // console.log('Focused!', progress.progress);
            }, 550)
        }
    }

    onExitViewport = () => {
        // console.log('Out!');
        this.setState({ beautyAnimated: false });
    }

    reveal = () => {
        const div = document.getElementById('beauty');
        div.classList.add('reveal');
    }

    render() { 
        return ( 
            <ScrollTrigger onProgress={this.onEnterViewport} onExit={this.onExitViewport}>
                <div id="beauty">
                    <div className="beauty-container" onMouseMove={() => this.skewSplotch()}>
                        <img src={beautyMain} alt="cover" id="beauty-main"/>
                        <img src={beautyBG} alt="cover" id="beauty-bg"/>
                        <img src={circle} alt="cover" id="circle"/>
                        <img src={triangle} alt="cover" id="triangle"/>
                        <div id="triangle-hotspot" onMouseOver={() => this.rotate('triangle')}></div>
                        <div id="circle-hotspot" onMouseOver={() => this.rotate('circle')}></div>
                    </div>
                    <div className="right">
                        <h2>Beauty</h2>
                        <p>Aestethic appeal is essential in today's world. With so many brands compeating for attention, the products that standout
                            are ususally the most memorable and pleasing to use and look at. With great arists in our team, your message will never look
                            as beautiful.
                        </p>
                    </div>
                </div>
            </ScrollTrigger>
         );
    }
}
 
export default Beauty;