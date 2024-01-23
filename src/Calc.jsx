import React, { Component } from 'react';
import './calc.css';

class Calc extends Component {
  render() {
    const { input1, setInput1, input2, setInput2, number, setNumber } = this.props;

    return (
      <div className='box'>
        <div className='calcul'>
          <input
            type="number"
            value={input1}
            placeholder="   Введите первую цифру:"
            className="in"
            onChange={(event) => setInput1(event.target.value)}
          />
          <input
            type="number"
            value={input2}
            placeholder="   Введите вторую цифру:"
            className="in"
            onChange={(event) => setInput2(event.target.value)}
          />
        </div>

        <div className="knopki">
          <button className="button" onClick={() => setNumber(+input1 + +input2)}>+</button>
          <button className="button" onClick={() => setNumber(+input1 - +input2)}>-</button>
          <button className="button" onClick={() => setNumber(+input1 * +input2)}>*</button>
          <button className="button" onClick={() => setNumber(+input1 / +input2)}>/</button>
        </div>

        <div className="knopki2">
          <button className="button1" onClick={() => setNumber(Math.pow(input1, input2))}>Возведение в степень.^</button>
          <button className="button1" onClick={() => setNumber(Math.pow(input1, 1 / input2))}>Вычисление корня.√</button>
        </div>
      </div>
    );
  }
}

export default Calc;

