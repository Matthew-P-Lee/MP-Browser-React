import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MPAPI from './mp-api.js';
import MPTicks from './mp-ticks.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MPAPI UserId="112244155"></MPAPI>
        <MPTicks UserId="112244155"></MPTicks>
      </div>
    );
  }
}

export default App;
