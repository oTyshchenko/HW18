import React, { Component } from 'react';
import Btn from './btn/btn.js';

class BtnBox extends Component {
  render() {
    const btnArr = ['AC', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const operators = ['-', '+', '*', '/'];
    const topRow = ['AC', '+/-', '%'];
    let cls;
    return (
      <div className='btn-box'>
        {btnArr.map((el) => {
          (el === '0') ? cls = 'btn long-btn' :
            (operators.includes(el)) ? cls = 'btn orange-btn' :
              (topRow.includes(el)) ? cls = 'btn top-btn' :
                (el === '=') ? cls = 'btn equally-btn' : cls = 'btn';

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