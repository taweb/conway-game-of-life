import React, { Component } from 'react';
import './App.css';
import Controls from './containers/Controls';
import Header from './containers/Header';
import GridLayout from './containers/GridLayout';
import LifeGrid from './containers/LifeGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LifeGrid cellSize={20} gridId={'life'}/>
        <Controls />
      </div>
    );
  } 
}

export default App;
