import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import router from './router'  
class App extends Component {
  render() {
    return (
      <div className="App">
        <h2> sim-1 </h2>
        { router }
      </div>
    );
  }
}

export default App;
