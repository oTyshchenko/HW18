import React, { Component } from 'react';
import './Btn.scss';

class Btn extends Component {
  render() {
    return (
      <button className={this.props.className} data-value={this.props.value} onClick={this.btnClick}>
        {this.props.value}
      </button>
    )
  }

  btnClick = (e) => {
    this.props.changeDisplay(e.target.dataset.value);
  }
}

export default Btn;