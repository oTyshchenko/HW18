import React, { Component } from 'react';
import { evaluate } from 'mathjs';
import Display from './display/Display';
import './App.scss';
import BtnBox from './BtnBox/BtnBox';

class App extends Component {
  state = {
    data: [],
    result: ''
  }

  render() {
    return (
      <div className="calculator">
        <Display result={this.state.result} />
        <BtnBox changeDisplay={this.changeDisplay} />
      </div>
    );
  }

  changeDisplay = (value) => {
    const lastSymbol = this.state.data[this.state.data.length - 1];
    const arr = this.state.data;

    switch (value) {

      case 'AC':
        this.setState({
          data: [],
          result: ''
        })
        break;

      case '/' || '*' || '-' || '+' || '.':
        if (lastSymbol === '/' || lastSymbol === '*' || lastSymbol === '-' || lastSymbol === '+' || lastSymbol === '.') {
          arr.pop();
          arr.push(value);
          this.setState({
            data: arr,
            result: arr
          })
        } else if (lastSymbol === undefined) {
        } else {
          arr.push(value);
          this.setState({
            data: arr,
            result: arr
          })
        }
        break;

      case '<':
        arr.pop();
        this.setState({
          data: arr,
          result: arr
        })
        break;

      case '%':
        arr.push('/100');
        this.setState({
          data: arr,
          result: arr
        })
        break;

      case '=':
        const str = this.state.data.join('');
        this.setState({
          data: [],
          result: evaluate(str)
        })
        break;

      default:
        arr.push(value);
        this.setState({
          data: arr,
          result: arr
        })
        break;
    }
  };
}

export default App;