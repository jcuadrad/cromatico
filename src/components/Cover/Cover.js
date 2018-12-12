import React, { Component } from 'react';

import './Cover.css';

/* Cover */
import cover from '../../assets/parallax/Capa1.png';
import hoverEl from '../../assets/parallax/Capa3.png';
import scorllEl from '../../assets/parallax/Capa2.png';

class Cover extends Component {
    constructor(props) {
        super(props);

        this.coverVertical = null;
        this.coverHorizontal = null;
        this.scrollIntervalID = null;
    }

    componentDidMount() {
        this.coverVertical = document.getElementById('scroll');
        this.coverHorizontal = document.getElementById('horizontal');
        this.scrollIntervalID = setInterval(this.scrollParallax, 10);
    }

    componentWillUnmount() {
        clearInterval(this.scrollIntervalID);
    }

    scrollParallax = () => {
        let windowScroll = window.scrollY;
        let itemTranslate = -1 * windowScroll;
        
        window.requestAnimationFrame(() => {
        this.coverVertical.style.transform = 'translateY(' + itemTranslate / 10 + 'px)';
        this.coverHorizontal.style.transform = 'translateX(' + itemTranslate / 25 + 'px)';
        });
    }

    render() { 
        return ( 
        <div className="cover">
            <h1>We build VR experiences<br/>from your story</h1>
            <p>Whatever you are trying to say, let's say it together</p>
            <button onClick={() => this.props.handleScrollToElement('#why', 2500)}>Learn more</button>
            <div className="parallax-image-container">
              <img src={cover} className="cover-image" alt="cover" />
              <img src={scorllEl} alt="cover" id="scroll"/>
              <img src={hoverEl} alt="cover" id="horizontal"/>
            </div>
        </div>
         );
    }
}
 
export default Cover;