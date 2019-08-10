import React, { Component } from 'react';
import TopBar from './components/TopNavBar';
import RightColumn from './components/RightColumn';
import LeftColumn from './components/LeftColumn';
import VoteButton from './components/VoteButton'
import matchdata from './data/matchdata.json';

// CSS imports
// import './css/index.css';
import './css/App.css';
import './css/tachyons.css';

// Database: prisma, graphQL - relational, bidirectional
// Location API for location data where user is to populate left hand field
// Percentage match, allow prediction with GraphQL

class App extends Component {

  state = {
    leftcolumn: {},
    rightcolumn: {},
    voteButton: {},
    leftSelection: '',
    rightSelection: ''
  };

  valUpdater = (leftVal) => {
    let rightvar = matchdata[leftVal]
    this.setState({rightSelection: rightvar})
  }

  componentDidUpdate = () => {
    console.log('parent updated');
  }

  render() {

    const { rightSelection } = this.state
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
        <RightColumn rightSelection={rightSelection}/>
        <VoteButton />
      </div>
    );
  }
}

export default App;
