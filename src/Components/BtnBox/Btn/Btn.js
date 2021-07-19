import React, { Component } from 'react';
import './Btn.scss';

class Btn extends Component {
  btnClick = () => {
    this.props.changeDisplay(this.props.value);
    let display = document.querySelector('.display');
    if (this.props.display) {
      if (this.props.display.length < 11) {
        display.style.fontSize = '60px'
      } else if (this.props.display.length >= 11 && this.props.display.length < 15) {
        display.style.fontSize = '50px'
      } else if (this.props.display.length >= 15 && this.props.display.length < 19) {
        display.style.fontSize = '40px'
      } else if (this.props.display.length >= 19) {
        display.style.fontSize = '20px'
      }
    }
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