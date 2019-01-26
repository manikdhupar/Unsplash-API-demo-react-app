import React, { Component } from 'react';
import Input from './components/Input';
import Titles from './components/Titles';
import './App.css';

import axios from 'axios';
import Unsplash from 'unsplash-js';

class App extends Component {
  state = {
    images: []
  };

  //fetching images from unspash api
  inputChangeHandler = event => {
    axios
      .get(
        'https://api.unsplash.com/search/photos/?page=1&per_page=10&query="food"&client_id=8f23666afddaae8fe13f6efc809cdf8d837787ce77f9aaa91f8f7aa0584ea3f7'
      )
      .then(res => {
        const arr = [];
        res.data.map(el => {
          arr.push(el.urls.full);
        });

        this.setState({ images: arr });
      })
      .catch(er => {
        console.log('er : ');
        console.log(er);
      });
  };

  render() {
    {
      console.log(this.state.images);
    }
    return (
      <div className="App">
        <Titles />
        <Input inputChangeHandler={this.inputChangeHandler} />
      </div>
    );
  }
}

export default App;
