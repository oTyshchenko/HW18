import React, { Component } from 'react';
import './btn.scss';

class Btn extends Component {
  btnClick = () => {
    this.props.changeDisplay(this.props.value);
  }

  render() {
    return (
      <button className={this.props.className} onClick={this.btnClick}>
        {this.props.value}
      </button>
    )
  }
}

export default Btn;