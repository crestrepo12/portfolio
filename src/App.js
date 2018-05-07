import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Home />
      </div>
    );
  }
}

export default App;
