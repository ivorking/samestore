import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import '../css/App.css';
import '../css/tachyons.css';

class VoteButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ticked: 'unticked'
        };
        this.handleClick = this.handleClick.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        // clicking on voting for association between stores
        console.log('button pressed');
        console.log(this.state.ticked);
    }

    onChange() {

    }

    render() {
        return (
            <div className = "buttonPos">
                {/* <Button className = "ph3 mt4 f6 link dim ba ph3 pv2 mb2 dib black" href="#0" onClick = {this.handleClick}>Click to upvote this match!</button> */}
                <Button variant="contained" color="primary" href="#0" onClick = {this.handleClick}>
                    Click to upvote this match!
                </Button>
            </div>
        )
    }
}

export default VoteButton;