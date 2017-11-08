import React, { Component } from 'react';
import separator from '../img/banner-separator.png';
import LearnMoreButton from './LearnMoreButton'

class VideoDemo extends Component {
    render() {
        return (
            <div id="how" className="howItWorks">
                <h1>Video Demo</h1>
                <img src={separator} className="separator" alt="separate" />
                <p>
                </p>    
                <div></div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xXNWGBO14rM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
                <LearnMoreButton/>
            </div>
        );
    }
}

export default VideoDemo;