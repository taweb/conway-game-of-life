import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid 
        	heightGrid={10}
        	widthGrid={10}
        	cellSize={40}
        />
      </div>
    );
  }
}

export default App;
