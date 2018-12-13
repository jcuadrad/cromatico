import React, { Component } from 'react';
import './Footer.css';

/* Modules */
import ScrollTrigger from 'react-scroll-trigger'

/* Images */
import instagram from '../../assets/team/Instagram.png'
import facebook from '../../assets/footer/facebook.png';
import twitter from '../../assets/footer/twitter.png';
import whiteLogo from '../../assets/footer/footer-logo.png';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    underline = (progress) => {
        const underline = document.getElementById('underline-footer');
        if (progress.progress >= 0.2 && !this.state.immersiveAnimated) {
          underline.style.width = '100%';
        }
    }

    render() { 
        return ( 
            <ScrollTrigger onProgress={this.underline}>
                <div id="footer">
                    <div id="footer-content">
                        <div className="footer-info">
                        <div id="social-media">
                            <h2>Let's make <br/>something great together!</h2>
                            <span id="underline-footer"></span>
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
            </ScrollTrigger>
         );
    }
}
 
export default Footer;