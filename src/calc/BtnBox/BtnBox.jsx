import React, { Component } from 'react';
import Btn from './Btn/Btn';
import './BtnBox.scss';

class BtnBox extends Component {
  render() {

    const btnArr = ['AC', '<', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
    const buttons = btnArr.map((el) => {
      if (el === 0) {
        return <Btn value={el} className={'btn long-btn'} changeDisplay={this.props.changeDisplay} />
      } else if(el === '/' || el === '*' || el === '+' || el === '-' || el === '=') {
        return <Btn value={el} className={'btn orange-btn'} changeDisplay={this.props.changeDisplay} />
      } else {
        return <Btn value={el} className={'btn'} changeDisplay={this.props.changeDisplay} />
      }
    });

    return (
      <div className="btn-box">
        {buttons}
      </div>
    );
  }
}

export default BtnBox;