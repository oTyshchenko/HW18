import React, { Component } from 'react';
import './Display.scss';

class Display extends Component {
  render() {
    return (
      <div className="display">
        {this.props.display}
      </div>
    );
  }
}

export default Display;