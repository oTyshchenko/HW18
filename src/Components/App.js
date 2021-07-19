import React, { Component } from 'react';
import Display from './Display/Display';
import './App.scss';
import BtnBox from './BtnBox/BtnBox';

class App extends Component {
  state = {
    firstNumber: '',
    operator: '',
    secondNumber: '',
    result: '',
    display: ''
  }

  changeDisplay = (value) => {
    const getRefreshState = (firstNumber, operator, secondNumber, result, display) => {
      return this.setState({
        firstNumber: firstNumber,
        operator: operator,
        secondNumber: secondNumber,
        result: result,
        display: display
      })
    }

    switch (true) {
      case value === 'AC':
        getRefreshState('', '', '', '', '');
        break;

      case ['/', '*', '-', '+'].includes(value):
        const firstNumber = this.state.firstNumber;

        if (firstNumber !== '') {
          getRefreshState(firstNumber, value, '', '', firstNumber);
        }
        break;

      case value === '+/-':
        if (this.state.operator === '') {
          const firstNumber = String(this.state.firstNumber * -1);

          getRefreshState(firstNumber, '', '', '', firstNumber);
        } else {
          const secondNumber = String(this.state.secondNumber * -1);

          getRefreshState(this.state.firstNumber, this.state.operator, secondNumber, '', secondNumber);
        }
        break;

      case value === '%':
        if (this.state.operator === '') {
          if (this.state.firstNumber !== '') {
            const firstNumber = this.state.firstNumber + '%';

            getRefreshState(firstNumber, '', '', '', firstNumber);
          }
        } else {
          if (this.state.secondNumber !== '') {
            const secondNumber = this.state.secondNumber + '%';

            getRefreshState(this.state.firstNumber, this.state.operator, secondNumber, '', secondNumber);
          }
        }
        break;

      case value === '.':
        if (this.state.operator === '') {
          if (this.state.firstNumber.indexOf('.') === -1) {
            const firstNumber = this.state.firstNumber + value;

            getRefreshState(firstNumber, '', '', '', firstNumber);
          }
        } else {
          if (this.state.secondNumber.indexOf('.') === -1) {
            const secondNumber = this.state.secondNumber + value;

            getRefreshState(this.state.firstNumber, this.state.operator, secondNumber, '', secondNumber);
          }
        }
        break;

      case value === '=':
        let result;
        if (this.state.operator === '+') {
          if (this.state.firstNumber.indexOf('%') !== -1 && this.state.secondNumber.indexOf('%') !== -1) {
            result = String(parseFloat(this.state.firstNumber) / 100 + parseFloat(this.state.secondNumber) / 100 * parseFloat(this.state.firstNumber) / 100);
          } else if (this.state.firstNumber.indexOf('%') !== -1) {
            result = String(parseFloat(this.state.firstNumber) / 100 + parseFloat(this.state.secondNumber));
          } else if (this.state.secondNumber.indexOf('%') !== -1) {
            result = String(parseFloat(this.state.firstNumber) + parseFloat(this.state.secondNumber) / 100 * +this.state.firstNumber);
          } else {
            result = String(+this.state.firstNumber + +this.state.secondNumber);
          }
        } else if (this.state.operator === '-') {
          if (this.state.firstNumber.indexOf('%') !== -1 && this.state.secondNumber.indexOf('%') !== -1) {
            result = String(parseFloat(this.state.firstNumber) / 100 - parseFloat(this.state.secondNumber) / 100 * parseFloat(this.state.firstNumber) / 100);
          } else if (this.state.firstNumber.indexOf('%') !== -1) {
            result = String(parseFloat(this.state.firstNumber) / 100 - parseFloat(this.state.secondNumber));
          } else if (this.state.secondNumber.indexOf('%') !== -1) {
            result = String(parseFloat(this.state.firstNumber) - parseFloat(this.state.secondNumber) / 100 * +this.state.firstNumber);
          } else {
            result = String(+this.state.firstNumber - +this.state.secondNumber);
          }
        } else if (this.state.operator === '*') {
          if (this.state.firstNumber.indexOf('%') !== -1 && this.state.secondNumber.indexOf('%') !== -1) {
            result = String(parseFloat(this.state.firstNumber) / 100 * parseFloat(this.state.secondNumber) / 100);
          } else if (this.state.firstNumber.indexOf('%') !== -1) {
            result = String(parseFloat(this.state.firstNumber) / 100 * parseFloat(this.state.secondNumber));
          } else if (this.state.secondNumber.indexOf('%') !== -1) {
            result = String(parseFloat(this.state.firstNumber) * parseFloat(this.state.secondNumber) / 100);
          } else {
            result = String(+this.state.firstNumber * +this.state.secondNumber);
          }
        } else if (this.state.operator === '/') {
          if (this.state.firstNumber.indexOf('%') !== -1 && this.state.secondNumber.indexOf('%') !== -1) {
            result = String((parseFloat(this.state.firstNumber) / 100) / (parseFloat(this.state.secondNumber) / 100));
          } else if (this.state.firstNumber.indexOf('%') !== -1) {
            result = String(parseFloat(this.state.firstNumber) / 100 / parseFloat(this.state.secondNumber));
          } else if (this.state.secondNumber.indexOf('%') !== -1) {
            result = String(parseFloat(this.state.firstNumber) / parseFloat(this.state.secondNumber) / 100);
          } else {
            result = String(+this.state.firstNumber / +this.state.secondNumber);
          }
        };

        getRefreshState('', '', '', result, result);
        break;

      case value === '0':
        if (this.state.operator === '') {
          const firstNumber = this.state.firstNumber + value;

          if (this.state.firstNumber !== '0' || this.state.firstNumber === '0.') {
            getRefreshState(firstNumber, '', '', '', firstNumber);
          }
        } else {
          const secondNumber = this.state.secondNumber + value;

          if (this.state.secondNumber !== '0' || this.state.secondNumber === '0.') {
            getRefreshState(this.state.firstNumber, this.state.operator, secondNumber, '', secondNumber);
          }
        }
        break;

      default:
        if (this.state.operator === '') {
          if (this.state.firstNumber !== '0') {
            const firstNumber = this.state.firstNumber + value;

            getRefreshState(firstNumber, '', '', '', firstNumber);
          } else {
            const firstNumber = value;

            getRefreshState(firstNumber, '', '', '', firstNumber);
          }
        } else {
          if (this.state.secondNumber !== '0') {
            const secondNumber = this.state.secondNumber + value;

            getRefreshState(this.state.firstNumber, this.state.operator, secondNumber, '', secondNumber);
          } else {
            const secondNumber = value;

            getRefreshState(this.state.firstNumber, this.state.operator, secondNumber, '', secondNumber);
          }
        }
        break;
    }
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

export default App;