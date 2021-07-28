import React, { Component } from 'react';
import './display.scss';

class Display extends Component {
  render() {
    return (
      <div className="display" id="display">
        {this.props.display}
      </div>
    );
  }
}

export default Display;