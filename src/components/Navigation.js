import React, { Component } from 'react';


class Navigation extends Component {
  render() {
    return (
     <div id="navigation" className="Navigation">
        <nav>
          <ul>
            <li>Home</li>
            <li>How it works</li>
            <li>Video Demo</li>
            <li>Team</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;