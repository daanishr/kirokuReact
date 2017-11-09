import React, { Component } from 'react';
import separator from '../img/banner-separator.png';
import { Button } from 'react-bootstrap';
import './learn.css'

class LearnMoreButton extends Component {
    render() {
        return (
            <div >
               <Button className="learnMore" bsStyle="primary" bsSize="large" block>Learn More</Button> 
                <div></div>
                <img src={separator} className="separator" alt="separate" />
            </div>
        );
    }
}

export default LearnMoreButton;