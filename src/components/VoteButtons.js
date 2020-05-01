import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import '../css/App.css';
import '../css/tachyons.css';

class VoteButtons extends Component {

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
                <div>
                    <Button variant="contained" color="primary" href="#0" onClick = {this.handleClick}>
                        Upvote this match
                    </Button>
                    </div>
                <div className = "mt3">
                    <Button variant="contained" color="secondary" href="#0" onClick = {this.handleClick}>
                        Report as inaccurate
                    </Button>
                </div>
            </div>
        )
    }
}

export default VoteButtons;