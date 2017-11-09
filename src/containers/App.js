import React, { Component } from 'react';
import logo from '../img/Kiroku-white.png';
import Navigation from '../components/Navigation';
import HowItWorks from '../components/HowItWorks';
import LearnMoreButton from '../components/LearnMoreButton';
import VideoDemo from '../components/VideoDemo';
import Team from '../components/Team';
import Info from '../components/info';
import Home from './Home';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            howItWorksVisible: false,
            videoVisible: false,
            homeVisible: true,
            teamVisible: false
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <img src={logo} className="App-logo" alt="logo" />
                    <div id="navigation" className="Navigation">
                        <nav>
                            <ul>
                                <div onClick={() => this.onClickHome()}><li>Home</li></div>
                                <div onClick={() => this.onClickHow()}><li>How it works</li></div>
                                <div onClick={() => this.onClickVideo()}><li>Video Demo</li></div>
                                <div onClick={() => this.onClickTeam()}><li>Team</li></div>
                            </ul>
                        </nav>
                    </div>


                </header>
                {
                    this.state.howItWorksVisible
                        ? < HowItWorks />
                        : null
                }
                {
                    this.state.howItWorksVisible
                        ? <Info />
                        : null
                }
                {
                    this.state.videoVisible
                        ? <VideoDemo />
                        : null
                }
                {
                    this.state.homeVisible
                        ? <Home />
                        : null
                }
                 {
                    this.state.teamVisible
                        ? <Team />
                        : null
                }


            </div>
        );

    }
    onClickHow() {
        this.setState({ howItWorksVisible: true, videoVisible: false, teamVisible: false, homeVisible: false });
    }
    onClickVideo() {
        this.setState({ howItWorksVisible: false, videoVisible: true, teamVisible: false,homeVisible: false  });
    }
    onClickHome() {
        this.setState({ howItWorksVisible: false, videoVisible: false, teamVisible: false, homeVisible: true  });
    }
    onClickTeam() {
        this.setState({ howItWorksVisible: false, videoVisible: false, teamVisible: true, homeVisible: false  });
    }
}

export default App;
