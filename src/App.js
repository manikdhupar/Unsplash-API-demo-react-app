import React, { Component } from 'react';
import Input from './components/Input';
import Titles from './components/Titles';
import './App.css';

import axios from 'axios';

class App extends Component {
  state = {
    images: []
  };

  //fetching images from unspash api
  inputChangeHandler = event => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="App">
        <Titles />
        <Input inputChangeHandler={this.inputChangeHandler} />
      </div>
    );
  }
}

export default App;
