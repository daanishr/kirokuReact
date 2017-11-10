import React, { Component } from 'react';
import Separator from '../components/Separator';
import LearnMoreButton from '../components/LearnMoreButton'
import './video.css';

class VideoDemo extends Component {
    render() {
        return (
            <div id="how" className="howItWorks">
                <h1>Video Demo</h1>
                <Separator/>
                <p>
                </p>    
                <div className="video">
                    <iframe width="100%" height="345" src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1" frameborder="0" allowfullscreen="true"></iframe>
                
                </div>
                <LearnMoreButton />
            </div>
        );
    }
}

export default VideoDemo;