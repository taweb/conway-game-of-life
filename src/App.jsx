import React, { Component } from 'react';
import './App.css';
import Controls from './containers/Controls';
import Header from './containers/Header';
import GridLayout from './containers/GridLayout';
import LifeGrid from './components/LifeGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LifeGrid cellSize={15}/>
        <Controls />
      </div>
    );
  } 
}

export default App;
