import React, { Component } from 'react';
import './Projects.css';

/* Modules */
import ScrollTrigger from 'react-scroll-trigger';

/* Projects */
import { ProjectList } from '../../utils/projects';
import featured from '../../assets/projects/ibaVR.jpg';

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
                        <h2>Projects <br/>We've Worked On</h2>
                    </div>
                    <div className="project-grid">
                    <div className="left-col">
                        <div className="featured-project">
                            <img src={ProjectList[0].photo} alt="project"/>
                            <div className="project-info">
                                <div className="project-title">
                                <p>{ProjectList[0].type}</p>
                                <h2>{ProjectList[0].name}</h2>
                                </div>
                                <div className="project-description">
                                <p>{ProjectList[0].description}</p>
                                    <div className="button">
                                    <div className="button-background"></div>
                                    <a className="button-text" target="blank" href={ProjectList[0].link}>
                                        <p>Show me more</p>
                                        <p>→</p>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="third-project">
                            <img src={ProjectList[2].photo} alt="project"/>
                            <div className="project-info">
                                <div className="project-title">
                                <p>{ProjectList[2].type}</p>
                                <h2>{ProjectList[2].name}</h2>
                                </div>
                                <div className="project-description">
                                <p>{ProjectList[2].description}</p>
                                    <div className="button">
                                    <div className="button-background"></div>
                                    <a className="button-text" target="blank" href={ProjectList[2].link}>
                                        <p>Show me more</p>
                                        <p>→</p>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="second-project">
                        <img src={ProjectList[1].photo} alt="project"/>
                        <div className="project-info">
                            <div className="project-title">
                            <p>{ProjectList[1].type}</p>
                            <h2>{ProjectList[1].name}</h2>
                            </div>
                            <div className="project-description">
                            <p>{ProjectList[1].description}</p>
                                <div className="button">
                                <div className="button-background"></div>
                                <a className="button-text" target="blank" href={ProjectList[1].link}>
                                    <p>Show me more</p>
                                    <p>→</p>
                                </a>
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