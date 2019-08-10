import React, { Component } from 'react';
import TopBar from './components/TopNavBar';
import RightColumn from './components/RightColumn';
import LeftColumn from './components/LeftColumn';
import VoteButton from './components/VoteButton'
import './css/App.css';
import './css/tachyons.css';

class App extends Component {

  state = {
    leftcolumn: {},
    rightcolumn: {},
    voteButton: {},
    leftSelection: ''
  };

  valUpdater = (leftVal) => {
    this.setState({leftSelection: leftVal})
  }

  componentDidUpdate = () => {
    console.log('parent updated');
  }

  render() {
      // const entryvar = "muggins"
    const { infoVar } = this.state;
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
        <LeftColumn infoVar={this.valUpdater} />
        <RightColumn />
        <VoteButton />
      </div>
    );
  }
}

export default App;
