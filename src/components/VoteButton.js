import React, { Component} from 'react';
import '../css/App.css';
import '../css/tachyons.css';

class VoteButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ticked: 'unticked'
        };
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
                <button className = "ph3 mt4 f6 link dim ba ph3 pv2 mb2 dib black" href="#0" onClick = {this.handleClick}>Click to upvote this match!</button>
            </div>
        )
    }
}

export default VoteButton;