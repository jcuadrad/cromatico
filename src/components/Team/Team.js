import React, { Component } from 'react';
import './Team.css';

/* Modules */
import ScrollTrigger from 'react-scroll-trigger';

/* Team */ 
import team1 from '../../assets/team/team-1.png';
import team2 from '../../assets/team/team-2.png';
import team3 from '../../assets/team/team-3.png';
import instagram from '../../assets/team/Instagram.png'

function Member(props) {
    return (
        <div className="member">
            <img src={props.image} alt="team-member"/>
            <div className="basic-info">
                <h3>{props.name}</h3>
                <p>{props.title}</p>
            </div>
            <div className="detail-profile">
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
                    <img src={instagram} alt="instagram"/>
                </div>
            </div>
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
                        <Member image={team1} name="Juan Cuadra" title="Pizzologo" />
                        <Member image={team2} name="Juan Cuadra" title="Lenguologo" />
                        <Member image={team3} name="Juan Cuadra" title="Risologo" />
                    </div>
                </div>
            </ScrollTrigger>
         );
    }
}
 
export default Team;