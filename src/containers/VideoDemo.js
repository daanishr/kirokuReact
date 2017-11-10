import React, { Component } from 'react';
import Separator from '../components/Separator';
import LearnMoreButton from '../components/LearnMoreButton'

class VideoDemo extends Component {
    render() {
        return (
            <div id="how" className="howItWorks">
                <h1>Video Demo</h1>
                <Separator/>
                <p>
                </p>    
                <div></div>
                <div class="h_iframe">
               <iframe height="2" width="2" src="https://www.youtube.com/watch?v=xXNWGBO14rM" frameborder="4" allowfullscreen></iframe>
              </div>
                
                <LearnMoreButton />
            </div>
        );
    }
}

export default VideoDemo;