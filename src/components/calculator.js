import React, { useState } from 'react';
import calculate from '../Logic/calculate';

const Calculator = () => {
  const stateObj = {
    total: 0,
    next: null,
    operation: null,
  };
  const [calculation, calculateProperties] = useState(stateObj);

  const handleClick = (item) => {
    const funcBtn = item.target.textContent;
    const newCalculation = { ...calculation };
    calculateProperties(calculate(newCalculation, funcBtn));
  };
  return (
    <div className="App container">
      <h2>Let´s do some math!</h2>
      <div className="app">
        <div className="calculator">
          <div className="display">
            <span className="number display">{ calculation.next || calculation.operation || calculation.total || 0}</span>
          </div>
          <div className="operators">
            <button onClick={handleClick} type="button">AC</button>
            <button onClick={handleClick} type="button">+/-</button>
            <button onClick={handleClick} type="button">%</button>
            <button onClick={handleClick} type="button">÷</button>
          </div>
          <div className="numbers1">
            <button onClick={handleClick} type="button">7</button>
            <button onClick={handleClick} type="button">8</button>
            <button onClick={handleClick} type="button">9</button>
            <button onClick={handleClick} type="button">x</button>
          </div>
          <div className="numbers2">
            <button onClick={handleClick} type="button">4</button>
            <button onClick={handleClick} type="button">5</button>
            <button onClick={handleClick} type="button">6</button>
            <button onClick={handleClick} type="button">-</button>
          </div>
          <div className="numbers3">
            <button onClick={handleClick} type="button">1</button>
            <button onClick={handleClick} type="button">2</button>
            <button onClick={handleClick} type="button">3</button>
            <button onClick={handleClick} type="button">+</button>
          </div>
          <div className="numbers4">
            <button onClick={handleClick} type="button">0</button>
            <button onClick={handleClick} type="button">.</button>
            <button onClick={handleClick} type="button">=</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
