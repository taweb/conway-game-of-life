import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid 
        	height={5}
        	width={5}
        	// cellSize={100}
        />
      </div>
    );
  }
}

export default App;
