import React, { Component } from 'react';
import './App.css';
import { Routes } from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: "#303336"}} >
      <Routes />
      </div>
    );
  }
}

export default App;
