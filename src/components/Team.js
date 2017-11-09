import React, { Component } from 'react';
import separator from '../img/banner-separator.png';
import './team.css';
import JayImage from '../img/jay.jpg';
import HannahImage from '../img/hannah.jpg';
import ef from '../img/entrepreneur_first_honeybadger.jpg'
class Team extends Component {
    render() {
        return (
            <div >
                <h1>Team</h1>
                <div></div>
                <img src={separator} className="separator" alt="separate" />

                <div class="flex-containerr">
                    
                    <div className="hannah">
                         <img src={HannahImage} className="imgur" alt="HannahBurrow"/>
                        <h1>Hannah Burrow</h1>
                        <h5>Co-founder and CEO</h5>
                        <p className="description">Hannah is a qualified dentist who has worked in practice, hospitals and public health. She finds taking notes to be incredibly boring.</p>
                    </div>

                    <div>
                        <img src={JayImage} className="imgur" alt="JayShah"/>
                        <h1>Jay Shah</h1>
                        <h5>Co-founder and CTO</h5>
                        <p className="description">Jay has a MPhil from University of Cambridge and has spent a number of years in Natural Language Processing research.</p>
                    </div>

                </div>
                <img src={separator} className="separator" alt="separate" />
                <h2>SUPPORTED BY</h2>
                <img src={ef} className="ef" alt="ef" />
                <h4>Entrepreneur First creates deep tech startups from scratch.</h4>
            </div>
        );
    }
}

export default Team;