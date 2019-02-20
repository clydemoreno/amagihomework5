import React, { Component } from 'react';

import './App.css';
import  KeyBoardEvents from './KeyBoardEvents';
import DisplayComponent from './DisplayComponent';
class App extends Component {
  
  state = {displayText: 'default value'};
  handleOnKeyUp = (e) => this.setState({displayText:e.target.value});

  render() {
    return (
      <div>
      <KeyBoardEvents handleOnKeyUp={this.handleOnKeyUp} />
      <DisplayComponent displayText={this.state.displayText}  />
      </div>
    );
  }
}

export default App;
