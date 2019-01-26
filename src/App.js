import React, { Component } from 'react';
import Input from './components/Input';
import Titles from './components/Titles';
import Image from './components/Image';
import './App.css';

import axios from 'axios';
import Unsplash from 'unsplash-js';

class App extends Component {
  state = {
    images: []
  };

  //fetching images from unspash api
  inputChangeHandler = event => {
    event.preventDefault();
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=6&query=${event.target.elements.i.value}&client_id=8f23666afddaae8fe13f6efc809cdf8d837787ce77f9aaa91f8f7aa0584ea3f7`
      )
      .then(res => {
        console.log(res.data.results);
        const arr = [];

        // res.data.results.map(el => {
        //   arr.push(el.urls.full);
        // });

        for (let i = 0; i < res.data.results.length; i++) {
          arr.push(res.data.results[i].urls.thumb);
        }

        this.setState({ images: arr });
      })
      .catch(er => {
        console.log('er : ');
        console.log(er);
      });
  };

  render() {
    const content = () => {
      if (!this.state.images.length > 0) {
        return null;
      }
        return this.state.images.map(el => <Image src={el} /> );
    };

    return (
      <div className="App">
        <Titles />
        <Input call={this.inputChangeHandler} />
        <div className="images">
        {content()}
        </div>
      </div>
    );
  }
}

export default App;
