import React, { Component } from 'react';
import Separator from '../components/Separator';
import LearnMoreButton from '../components/LearnMoreButton'
import './video.css';
import './info.css'

class VideoDemo extends Component {
    render() {
        return (
            <div id="how" className="howItWorks">
                <h1>Video Demo</h1>
                <Separator/>
                <p>
                </p>    
                <div className="video">
                    <iframe className="iframeVideo" width="100%" height="100%" src="https://www.youtube.com/embed/xXNWGBO14rM?rel=0&amp;controls=1&amp;showinfo=0&autoplay=1" frameborder="0" allowfullscreen="true"></iframe>
                    
                
                </div>
                <div className="learnButton">
                    <LearnMoreButton />
                </div>    
            </div>
        );
    }
}

export default VideoDemo;