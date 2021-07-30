import React, { Component } from 'react';
import Display from './display/display.js';
import BtnBox from './btnBox/btnBox.js';
import { changeNumber } from '../utils/change-number.js';
import { getClearState } from '../utils/get-clear-state.js';
import { getNumber } from '../utils/get-number.js';
import { getOperator } from '../utils/get-operator.js';
import { getResultState } from '../utils/get-result-state.js';
import { pointChecker } from '../utils/point-checker.js';
import { changePolar } from '../utils/change-polar.js';
import { getStrWithZero } from '../utils/zero-click.js';
import { changeFontSize } from '../utils/change-font-size.js';
import { getNumberPercent } from '../utils/get-number-percent.js';

import './calculator.scss';

class Calculator extends Component {
  state = {
    firstNumber: '',
    operator: '',
    secondNumber: '',
    display: ''
  }

  getRefreshState = (obj) => {
    changeFontSize(obj.display, document.getElementById('display'));

    return this.setState({
      firstNumber: String(obj.firstNumber),
      operator: String(obj.operator),
      secondNumber: String(obj.secondNumber),
      display: String(obj.display)
    })
  }

  changeDisplay = (value) => {
    let newState = { ...this.state };

    switch (true) {
      case value === 'AC':
        getClearState(newState);
        break;
      case ['/', '*', '-', '+'].includes(value):
        getOperator(newState, value);
        break;
      case value === '+/-':
        changeNumber(newState, changePolar);
        break;
      case value === '%':
        changeNumber(newState, getNumberPercent, value);
        break;
      case value === '.':
        changeNumber(newState, pointChecker, value);
        break;
      case value === '=':
        getResultState(newState);
        break;
      case value === '0':
        changeNumber(newState, getStrWithZero, value);
        break;
      default:
        changeNumber(newState, getNumber, value);
        break;
    }

    this.getRefreshState(newState);
  }

  render() {
    return (
      <div className="calculator">
        <Display display={this.state.display} />
        <BtnBox changeDisplay={this.changeDisplay} display={this.state.display} />
      </div>
    );
  }
}

export default Calculator;