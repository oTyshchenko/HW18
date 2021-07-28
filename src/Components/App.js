import React, { Component } from 'react';
import Display from './display/display.js';
import './app.scss';
import BtnBox from './btnBox/btnBox.js';

class App extends Component {
  state = {
    firstNumber: '',
    operator: '',
    secondNumber: '',
    result: '',
    display: ''
  }

  getRefreshState = (firstNumber, operator, secondNumber, result, onDisplay) => {
    const display = document.getElementById('display')

    if (onDisplay) {
      if (onDisplay.length >= 0 && onDisplay.length < 8) {
        display.style.fontSize = '50px';
      } else if (onDisplay.length >= 8 && onDisplay.length < 10) {
        display.style.fontSize = '40px';
      } else if (onDisplay.length >= 10 && onDisplay.length < 13) {
        display.style.fontSize = '30px';
      } else if (onDisplay.length >= 13) {
        display.style.fontSize = '20px';
      }
    }

    return this.setState({
      firstNumber: firstNumber,
      operator: operator,
      secondNumber: secondNumber,
      result: result,
      display: onDisplay
    })
  }

  changeDisplay = (value) => {
    const ll = (str) => {
      if (str) {
        if (str.length >= 0 && str.length < 8) {
          return str.substr(0, 7);
        } else if (str.length >= 8 && str.length < 10) {
          return str.substr(0, 9);
        } else if (str.length >= 10 && str.length < 13) {
          return str.substr(0, 12);
        } else if (str.length >= 13) {
          return str.substr(0, 16);
        }
      }
    }


    switch (true) {
      case value === 'AC':
        this.getRefreshState('', '', '', '', '');
        break;

      case ['/', '*', '-', '+'].includes(value):
        const firstNumber = this.state.firstNumber;

        if (firstNumber !== '') {
          this.getRefreshState(firstNumber, value, '', '', firstNumber);
        }
        break;

      case value === '+/-':
        if (this.state.operator === '') {
          const firstNumber = String(this.state.firstNumber * -1);

          this.getRefreshState(firstNumber, '', '', '', firstNumber);
        } else {
          const secondNumber = String(this.state.secondNumber * -1);

          this.getRefreshState(this.state.firstNumber, this.state.operator, secondNumber, '', secondNumber);
        }
        break;

      case value === '%':
        if (this.state.operator === '') {
          if (this.state.firstNumber !== '') {
            const firstNumber = this.state.firstNumber + '%';

            this.getRefreshState(firstNumber, '', '', '', firstNumber);
          }
        } else {
          if (this.state.secondNumber !== '') {
            const secondNumber = this.state.secondNumber + '%';

            this.getRefreshState(this.state.firstNumber, this.state.operator, secondNumber, '', secondNumber);
          }
        }
        break;

      case value === '.':
        if (this.state.operator === '') {
          if (this.state.firstNumber.indexOf('.') === -1) {
            const firstNumber = this.state.firstNumber + value;

            this.getRefreshState(firstNumber, '', '', '', firstNumber);
          }
        } else {
          if (this.state.secondNumber.indexOf('.') === -1) {
            const secondNumber = this.state.secondNumber + value;

            this.getRefreshState(this.state.firstNumber, this.state.operator, secondNumber, '', secondNumber);
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

        this.getRefreshState('', '', '', result, result);
        break;

      case value === '0':
        if (this.state.operator === '') {
          const firstNumber = this.state.firstNumber + value;

          if (this.state.firstNumber !== '0' || this.state.firstNumber === '0.') {
            this.getRefreshState(firstNumber, '', '', '', firstNumber);
          }
        } else {
          const secondNumber = this.state.secondNumber + value;

          if (this.state.secondNumber !== '0' || this.state.secondNumber === '0.') {
            this.getRefreshState(this.state.firstNumber, this.state.operator, secondNumber, '', secondNumber);
          }
        }
        break;

      default:
        if (this.state.operator === '') {
          if (this.state.firstNumber !== '0') {
            const firstNumber = this.state.firstNumber + value;

            this.getRefreshState(ll(firstNumber), '', '', '', ll(firstNumber));
          } else {
            const firstNumber = value;

            this.getRefreshState(ll(firstNumber), '', '', '', ll(firstNumber));
          }
        } else {
          if (this.state.secondNumber !== '0') {
            const secondNumber = this.state.secondNumber + value;

            this.getRefreshState(this.state.firstNumber, this.state.operator, ll(secondNumber), '', ll(secondNumber));
          } else {
            const secondNumber = value;

            this.getRefreshState(this.state.firstNumber, this.state.operator, ll(secondNumber), '', ll(secondNumber));
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