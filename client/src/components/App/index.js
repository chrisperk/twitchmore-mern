import React, { Component } from 'react';
import './App.css';
import Search from '../Search';
import ChannelDisplay from '../ChannelDisplay';
import LoginModal from '../modals/LoginModal';
import SignupModal from '../modals/SignupModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <ChannelDisplay />
        <LoginModal />
        <SignupModal />
      </div>
    );
  }
}

export default App;
