import React, { Component } from "react";
import { useState } from "react";
import Calc from "./Calc";
import "./calc.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: undefined,
      input2: undefined,
      number: undefined,
    };
  }

  setInput1 = (value) => {
    this.setState({ input1: value });
  };

  setInput2 = (value) => {
    this.setState({ input2: value });
  };

  setNumber = (value) => {
    this.setState({ number: value });
  };

  render() {
    const { input1, input2, number } = this.state;

    return (
      <div className="container">
        <h1 id='name'> Calculator. </h1>
        <input
          type="number"
          placeholder="  Ответ."
          value={number || ""}
          className='input'
        />
        <Calc
          input1={input1}
          setInput1={this.setInput1}
          input2={input2}
          setInput2={this.setInput2}
          number={number}
          setNumber={this.setNumber}
        />
      </div>
    );
  }
}

export default App;
