import React, { Component } from 'react';
import './Projects.css';

/* Modules */
import ScrollTrigger from 'react-scroll-trigger';

/* Projects */
import featured from '../../assets/projects/feature-project.png';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    reveal = (progress) => {
        const div = document.getElementById('projects');
        if (progress.progress >= 0.2 && !this.state.immersiveAnimated) {
        div.classList.add('reveal');
        }
    }

    render() { 
        return ( 
            <ScrollTrigger onProgress={this.reveal}>
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
            </ScrollTrigger>
         );
    }
}
 
export default Projects;