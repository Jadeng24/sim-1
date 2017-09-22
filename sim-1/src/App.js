import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import router from './router'  
class App extends Component {

  ComponentDidMount() {
    
  }


  render() {




    return (
      <div className="App">
        { router }
      </div>
    );
  }
}

export default App;
