import React, { Component } from 'react';
import './Storytelling.css';

/* Modules */
import ScrollTrigger from 'react-scroll-trigger';

/* Images */
import story from '../../assets/storytelling/C1.png';
import storyDrawing from '../../assets/storytelling/C2.png';
import storyRect from '../../assets/storytelling/C3.png';

class Storytelling extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            revealed: false
         }

        this.storyRectangles = null;
        this.storyDrawing = null;
        this.story = null;
    }

    componentDidMount() {
        this.storyRectangles = document.getElementById('storytelling-one');
        this.storyDrawing = document.getElementById('storytelling-two');
        this.story = document.getElementById('story');
    }

    move = () => {
        const rect = this.story.getBoundingClientRect();

        const moveByX = (this.props.position.x - rect.x);
        const moveByXNegative = (rect.x - this.props.position.x);
        
        this.storyRectangles.style.transform = `translateX(${moveByX/200}%)`;
        this.storyDrawing.style.transform = `translateX(${moveByX/300}%)`;
        this.story.style.transform = `translateX(${moveByXNegative/500}%)`;
    }

    reveal = (progress) => {
        const div = document.getElementById('storytelling');
        if (progress.progress >= 0.3 && !this.state.revealed) {
          div.classList.add('reveal');
          this.setState({ revealed: true });
        }
    }

    render() { 
        return ( 
            <ScrollTrigger onProgress={this.reveal}>
                <div id="storytelling">
                    <div className="left">
                    <h2>Storytelling</h2>
                    <p>Whether it is your idea or a collaboration with us, we will make sure to craft an engaging story that captures the imagination of your audience.</p>
                    </div>
                    <div className="story-container" onMouseMove={() => this.move()}>
                    <img src={story} alt="cover" id="story"/>
                    <img src={storyDrawing} alt="cover" id="storytelling-two"/>
                    <img src={storyRect} alt="cover" id="storytelling-one"/>
                    </div>
                </div>
            </ScrollTrigger>
        );
    }
}
 
export default Storytelling;