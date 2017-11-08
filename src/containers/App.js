import React, { Component } from 'react';
import logo from '../img/Kiroku-white.png';
import Navigation from '../components/Navigation'
import HowItWorks from '../components/HowItWorks'
import LearnMoreButton from '../components/LearnMoreButton'
import VideoDemo from '../components/VideoDemo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />


          <p className="App-intro">
            Never write clinical notes again
        </p>
        </header>

        <HowItWorks />
        <LearnMoreButton />
        <VideoDemo/>
      </div>
    );
  }
}

export default App;