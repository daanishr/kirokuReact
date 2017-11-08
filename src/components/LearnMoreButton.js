import React, { Component } from 'react';
import separator from '../img/banner-separator.png';

class LearnMoreButton extends Component {
    render() {
        return (
            <div id="how" className="howItWorks">
                <button onClick={this.openModal} className="btn btn-primary">Learn more</button>  
                <div></div>
                <img src={separator} className="separator" alt="separate" />
            </div>
        );
    }
}

export default LearnMoreButton;