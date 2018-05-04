import React, { Component } from 'react';
import './App.css';
import Grid from './containers/Grid';
import Controls from './containers/Controls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Life Game</p>
        <Grid cellSize={10} />
        <Controls />
      </div>
    );
  } 
}

export default App;
