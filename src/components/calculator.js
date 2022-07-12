import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App container">
        <div className="app">
          <div className="calculator">
            <div className="display">
              <span className="pre-result">(0)</span>
              <span className="number">0</span>
            </div>
            <div className="operators">
              <button type="button">AC</button>
              <button type="button">+/-</button>
              <button type="button">%</button>
              <button type="button">÷</button>
            </div>
            <div className="numbers1">
              <button type="button">7</button>
              <button type="button">8</button>
              <button type="button">9</button>
              <button type="button">x</button>
            </div>
            <div className="numbers2">
              <button type="button">4</button>
              <button type="button">5</button>
              <button type="button">6</button>
              <button type="button">-</button>
            </div>
            <div className="numbers3">
              <button type="button">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
              <button type="button">+</button>
            </div>
            <div className="numbers4">
              <button type="button">0</button>
              <button type="button">.</button>
              <button type="button">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
