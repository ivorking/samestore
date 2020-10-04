import React, { Component } from 'react';
import RightColumn from './components/RightColumn';
import LeftColumn from './components/LeftColumn';
import VoteButtons from './components/VoteButtons'
import matchdata from './data/matchdata.json';
import BottomLeft from './components/BottomLeft';
import Home from './components/Home';
import About from './components/About';
import Data from './components/Data';
import Typography from '@material-ui/core/Typography';
import RightCounter from './components/RightCounter';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// CSS imports
// import './css/index.css';
import './css/App.css';
import './css/tachyons.css';
import 'tachyons-skins';

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
      <Router>
        <div className="App">
          {/* <TopBar /> */}
          <header className="App-header">
          <Typography variant="h6" color="inherit" noWrap>
              <p>
                Compare the store!
              </p>
            </Typography>
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
          <VoteButtons />

          <BottomLeft />

          {/* Router for bottom panel */}
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/data">
                <Data />
              </Route>
          </Switch>
          <RightCounter />
        </div>
      </Router>
    );
  }
}

export default App;
