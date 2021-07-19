import React, { Component } from 'react';
import Btn from './Btn/Btn';
import './BtnBox.scss';

class BtnBox extends Component {
  render() {
    const btnArr = ['AC', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const operators = ['-', '+', '*', '/', '='];
    let cls;
    return (
      <div className='btn-box'>
        {btnArr.map((el) => {
          (el === '0') ? cls = 'btn long-btn' : (operators.includes(el)) ? cls = 'btn orange-btn' : cls = 'btn';
          
          return (
            <Btn
              key={el}
              value={el}
              changeDisplay={this.props.changeDisplay}
              display={this.props.display}
              className={cls}
            />
          )
        })}
      </div>
    );
  }
}

export default BtnBox;