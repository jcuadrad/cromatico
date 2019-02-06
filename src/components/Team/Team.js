import React, { Component } from 'react';
import './Team.css';

/* Modules */
import ScrollTrigger from 'react-scroll-trigger';

/* Team */ 
import { TeamMembers } from '../../utils/team-members';

import instagram from '../../assets/icons/instagram.png'
import linkedin from '../../assets/icons/linkedin.png'
import web from '../../assets/icons/web.png'
import behance from '../../assets/icons/behance.png'

function Member(props) {
    return (
        <div className="member">
            <img src={props.image} alt="team-member"/>
            <div className="basic-info">
                <h3>{props.name}</h3>
                <p>{props.title}</p>
            </div>
            {props.description ? 
                (<div className="detail-profile">
                    <p className="member-desc">{props.description}</p>
                    <div className="social-icons">
                        {props.social.instagram ? 
                        <a className="icon" target="blank" href={props.social.instagram}>
                            <img src={instagram} alt="instagram"/>
                        </a>
                        : null}
                        {props.social.linkedin ? 
                        <a className="icon" target="blank" href={props.social.linkedin}>
                            <img src={linkedin} alt="linkedin"/>
                        </a>
                        : null}
                        {props.social.web ? 
                        <a className="icon" target="blank" href={props.social.web}>
                            <img src={web} alt="web"/>
                        </a>
                        : null}
                        {props.social.behance ? 
                        <a className="icon" target="blank" href={props.social.behance}>
                            <img src={behance} alt="behance"/>
                        </a>
                        : null}
                    </div>
                </div>)
                : 
                (<div className="detail-profile">
                    <p className="first-line">Lorem Ipsum Bla bla bla</p>
                    <p>Lorem Ipsum Bla bla bla</p>
                    <p>Lorem Ipsum Bla bla bla</p>
                    <p>Lorem Ipsum Bla bla bla</p>
                    <p>Lorem Ipsum Bla bla bla</p>
                    <p>Lorem Ipsum Bla bla bla</p>
                    <p>Lorem Ipsum Bla bla bla</p>
                    <p>Lorem Ipsum Bla bla bla</p>
                    <p>Lorem Ipsum Bla bla bla</p>
                    <div className="social-icons">
                        {props.social.instagram ? 
                            <a className="icon" target="blank" href={props.social.instagram}>
                                <img src={instagram} alt="instagram"/>
                            </a>
                            : null}
                            {props.social.linkedin ? 
                            <a className="icon" target="blank" href={props.social.linkedin}>
                                <img src={linkedin} alt="linkedin"/>
                            </a>
                            : null}
                            {props.social.web ? 
                            <a className="icon" target="blank" href={props.social.web}>
                                <img src={web} alt="web"/>
                            </a>
                            : null}
                            {props.social.behance ? 
                            <a className="icon" target="blank" href={props.social.behance}>
                                <img src={behance} alt="behance"/>
                            </a>
                        : null}
                    </div>
                </div>)}
        </div>
    )
}

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    reveal = (progress) => {
        const div = document.getElementById('team');
        if (progress.progress >= 0.3 && !this.state.immersiveAnimated) {
            div.classList.add('reveal');
        }
    }

    render() { 
        return ( 
            <ScrollTrigger onProgress={this.reveal}>
                <div id="team">
                    <div className="description">
                        <h2>More than a company, <br/>we are a community.</h2>
                        <p>A team full of multi-disciplinary artsits, programmers and creatives <br/>that wanted to experiment with new mediums.</p>
                    </div>
                    <div className="profiles">
                        {TeamMembers.map(member => {
                            return <Member image={member.photo} name={member.name} title={member.title} 
                                           description={member.description} social={member.social}/>
                        })}
                    </div>
                </div>
            </ScrollTrigger>
         );
    }
}
 
export default Team;