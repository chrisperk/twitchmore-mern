import React, { Component } from 'react';
import './App.css';
import Search from '../Search';
import ChannelDisplay from '../ChannelDisplay';
import LoginModal from '../modals/LoginModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <ChannelDisplay />
        <LoginModal />
      </div>
    );
  }
}

export default App;
