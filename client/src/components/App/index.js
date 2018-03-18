import React, { Component } from 'react';
import './App.css';
import Search from '../Search';
import ChannelDisplay from '../ChannelDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <ChannelDisplay />
      </div>
    );
  }
}

export default App;
