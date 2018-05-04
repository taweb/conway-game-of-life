import React, { Component } from 'react';
import './App.css';
import Grid from './containers/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Life Game</p>
        <Grid cellSize={10} />
        <button style={{display: "block"}}>Next Generation</button>
      </div>
    );
  } 
}

export default App;
