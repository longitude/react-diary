import React, { Component } from "react";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      currentValue: ""
    };
  }

  addToCurrentValue(event) {
    event.stopPropagation();
    this.setState({
      currentValue: this.state.currentValue + event.target.innerText
    });
  }

  calculate(event) {
    event.stopPropagation();
    this.setState({
      currentValue: eval(this.state.currentValue)
    });
  }

  render() {
    return (
      <div className="calculator">
        <Display currentValue={this.state.currentValue} />
        <Button
          addToCurrentValue={this.addToCurrentValue.bind(this)}
          label={9}
        />
        <button onClick={this.calculate.bind(this)}>Calculate</button>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    let operators = ["+", "-", "*"];
    let buttons = [];
    for (let i = 0; i <= this.props.label; i++) {
      buttons.push(
        <button
          onClick={this.props.addToCurrentValue}
          key={Date.now() + Math.random()}
        >
          {i}
        </button>
      );
    }
    for (let i = 0; i <= operators.length; i++) {
      buttons.push(
        <button
          onClick={this.props.addToCurrentValue}
          key={Date.now() + Math.random()}
        >
          {operators[i]}
        </button>
      );
    }
    return (
      <div>
        {buttons}
      </div>
    );
  }
}

class Display extends Component {
  render() {
    return <input value={this.props.currentValue} />;
  }
}

export default Calculator;
