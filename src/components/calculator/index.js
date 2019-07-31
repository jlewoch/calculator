import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import NumberInput from './NumberInput';
import Numpad from './Numpad';
import SideControls from './SideControls';
export default class Calculator extends Component {
  static propTypes = {
    prop: PropTypes
  };
  state = { inputvalue: 0 };
  total = null;
  display = createRef();
  setInputValue = e => this.setState({ inputvalue: e });

  onNumClick = e => {
    let pressed = e.target ? e.target.value : e;
    if (
      /^((?![a-zA-Z])(\d+|\d+\.|\d+.\d+))$/.test(pressed) ||
      pressed.trim().length === 0
    ) {
      const value =
        typeof this.state.inputvalue === 'number'
          ? pressed.substring(pressed.length - 1)
          : this.display.current.input.value + pressed;
      this.setInputValue(value);
    }
  };
  del = e => this.setInputValue(e.substring(0, e.length - 1));
  clearMem = () => {
    this.setInputValue(0);
    this.total = null;
  };
  clear = () => this.setInputValue(0);
  addition = a => b => a + b;
  subtraction = a => b => a - b;
  division = a => b => a / b;
  multiplication = a => b => a * b;
  controlPress = e => {
    e.preventDefault();
    const btn = e.key ? e.key : e.target.value;
    console.log(btn);
    switch (btn) {
      case '+':
        this.setTotal(this.addition);
        console.log(btn);
        break;
      case '-':
        this.setTotal(this.subtraction);
        break;
      case '*':
        this.setTotal(this.multiplication);
        break;
      case '/':
        this.setTotal(this.division);
        break;
      case '=':
      case 'Enter':
        this.setTotal();
        this.total = null;
        break;
      case 'Backspace':
        this.del();
        break;
      default:
        this.onNumClick(btn);
    }
  };

  setTotal = func => {
    const value = parseFloat(this.state.inputvalue);
    if (typeof this.total === 'function') {
      this.total = this.total(value);
      return this.setInputValue(this.total);
    } else if (func) {
      this.total = func(this.total ? this.total : value);
    }
    this.setInputValue(value);
  };
  componentDidMount() {
    document.addEventListener('keydown', this.controlPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.controlPress);
  }

  render() {
    const { inputvalue } = this.state;
    return (
      <div className="container">
        <NumberInput
          disp={this.display}
          onChange={this.setInputValue}
          value={inputvalue}
        />

        <div className="controls">
          <div>
            <Numpad
              onClick={this.onNumClick}
              del={() => this.del(inputvalue)}
              clear={this.clear}
              clearmem={this.clearMem}
            />
          </div>
          <SideControls controlPress={this.controlPress} />
        </div>
      </div>
    );
  }
}
