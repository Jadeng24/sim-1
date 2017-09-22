import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import router from './router'  
class App extends Component {
  constructor() {
    super();

    this.state = {
      shelf: "",
      bin: ""
      
    }
  }

  // ComponentDidMount() {
    
  // }


  render() {




    return (
      <div className="App">
        { router }
      </div>
    );
  }
}

export default App;
