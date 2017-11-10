import React, { Component } from 'react';
import Separator from './Separator';
import { Button } from 'react-bootstrap';
import './learn.css'

class LearnMoreButton extends Component {
    render() {
        return (
            <div >
               <Button className="learnMore" bsStyle="primary" bsSize="large" block>Learn More</Button> 
                <div></div>
                <Separator/>
            </div>
        );
    }
}

export default LearnMoreButton;