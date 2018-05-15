import React, { Component } from 'react';
import './App.css'
import Calculator from '../components/calculator/Calculator.js';


//variables 
let total = 0;
let displayValue = '0';
let num1 = null;
let selectedFunc = null;
let history = [];


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueinput: '0',
      userInput: [],
      ranFunc: false,
    }
  }

  keyFilter = (e) => {
    this.funcfilter(e.key);
  }

  //removes lat char from string
  delete = () => {
    displayValue = displayValue.replace(displayValue.charAt(displayValue.length - 1), '');
    if (displayValue === '') {
      displayValue = '0';
    }
    this.setState({ valueinput: displayValue });

  }

  //push to arrays
  pushInput = (disp, func) => {
    this.state.userInput.push(disp, func);
    history.push(disp, func);
  }

  //assigns variables and runs appropriate action based on values inputted by user
  performFunc = () => {
    console.log("perform")
    if (history.length > 2) {

      for (let i = 0; i <= history.length - 1; i++) {
        if (total === 0) {
          total = parseFloat(history[0]);

        } else if (parseFloat(history[i])) {
          num1 = parseFloat(history[i]);

        } else if (history[i] === '+' || history[i] === '-' || history[i] === 'multiply' || history[i] === '*' || history[i] === '/') {
          selectedFunc = history[i];
        }

        if (num1 !== null & selectedFunc !== null) {
          this.func();
        }
        console.log("perform for")
      }

      history = [];
      history.push(this.state.userInput[this.state.userInput.length])
    }
    this.setState({ ranFunc: true });
    displayValue = total.toString();
    this.updateDisplay();



  }

  //Changes total with appropiate function
  func = () => {
    if (selectedFunc === '+') {
      total += num1;
      num1 = null;
    } else if (selectedFunc === '-') {
      total -= num1;
      num1 = null;
    } else if (selectedFunc === '/') {
      total /= num1;
      num1 = null;
    } else if (selectedFunc === 'multiply' || selectedFunc === '*') {
      total *= num1;
      num1 = null;
    }
    console.log(total)
  }


  updateDisplay = () => {
    this.setState({ valueinput: displayValue });
  }

  // determins what to do with users input
  funcfilter = (userInput) => {

    switch (true) {

      case (Number.isInteger(parseInt(userInput)) || userInput === '.'):
        console.log(userInput);
        if (displayValue.includes('.') & userInput === '.') {
          alert(`Number entered already has a decimal`);
        } else if ((displayValue === '0' & userInput !== '.') || (displayValue !== 0 & this.state.ranFunc === true)) {
          displayValue = userInput;
          this.setState({ ranFunc: false });
          this.updateDisplay();
        } else {
          this.setState({ valueinput: displayValue += userInput });
        }
        break;

      case (userInput === 'Backspace'):
        this.delete();
        break;

      case (userInput === '+' || userInput === '-' || userInput === 'multiply' || userInput === '*' || userInput === '/'):
        this.pushInput(displayValue, userInput)
        this.performFunc(userInput)
        break;

      case (userInput === '=' || userInput === 'Enter'):
        break;

      case (userInput === 'clear'):
        history = [];
        displayValue = 0;
        total = 0;
        this.setState({ userInput: [] });
        this.updateDisplay();
        break;

      default:
        console.log('default')
    }

  }

  clickHandler = (event) => {
    this.funcfilter(event.target.value)
  }

  componentDidMount() {
    window.addEventListener("keydown", this.keyFilter)
  }


  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyFilter)
  }


  render() {

    return (
      <div className='main'>
      <h1 style={{width: '100%', margin: '5px', 'text-align': 'center'}} >Basic Calculator</h1>
        <div className='calc'>
          <Calculator value={this.state.valueinput} click={this.clickHandler} />
        </div>
        </div>
    );
  }
}

export default App;
