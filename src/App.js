import React, { Component } from 'react';
import TopBar from './components/TopNavBar'
import RightColumn from './components/RightColumn'
import LeftColumn from './components/LeftColumn'
import './App.css';

class App extends Component {

  // basic storage of left and right props
  state = {
    leftcolumn: {},
    rightcolumn: {}
  };

  render() {
    return (
      <div className="App">
        <TopBar />
        <header className="App-header">
          <p>
            Compare the store!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
        <LeftColumn />
        <RightColumn />
      </div>
    );
  }
}

export default App;
