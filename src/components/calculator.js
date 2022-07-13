import React, { Component } from 'react';
import calculate from './Logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    const funcBtn = item.target.textContent;
    this.setState((e) => calculate(e, funcBtn));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App container">
        <div className="app">
          <div className="calculator">
            <div className="display">
              {/* <span className="pre-result">(0)</span> */}
              <span className="number display">{ next || operation || total || 0}</span>
            </div>
            <div className="operators">
              <button onClick={this.handleClick} type="button">AC</button>
              <button onClick={this.handleClick} type="button">+/-</button>
              <button onClick={this.handleClick} type="button">%</button>
              <button onClick={this.handleClick} type="button">÷</button>
            </div>
            <div className="numbers1">
              <button onClick={this.handleClick} type="button">7</button>
              <button onClick={this.handleClick} type="button">8</button>
              <button onClick={this.handleClick} type="button">9</button>
              <button onClick={this.handleClick} type="button">x</button>
            </div>
            <div className="numbers2">
              <button onClick={this.handleClick} type="button">4</button>
              <button onClick={this.handleClick} type="button">5</button>
              <button onClick={this.handleClick} type="button">6</button>
              <button onClick={this.handleClick} type="button">-</button>
            </div>
            <div className="numbers3">
              <button onClick={this.handleClick} type="button">1</button>
              <button onClick={this.handleClick} type="button">2</button>
              <button onClick={this.handleClick} type="button">3</button>
              <button onClick={this.handleClick} type="button">+</button>
            </div>
            <div className="numbers4">
              <button onClick={this.handleClick} type="button">0</button>
              <button onClick={this.handleClick} type="button">.</button>
              <button onClick={this.handleClick} type="button">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
