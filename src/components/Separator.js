import React, { Component } from 'react';
import separator from '../img/banner-separator.png';


class Separator extends Component {
    render() {
        return (
            <div >
                <img src={separator} className="separator" alt="separate" />
            </div>
        );
    }
}

export default Separator;