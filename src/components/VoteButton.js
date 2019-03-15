import React, { Component} from 'react';

class VoteButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ticked: 'unticked'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick = () => {
        // clicking on voting for association between stores
    }

    onChange() {

    }

    render() {
        return (
            <div>
                <button onClick = {handleClick}>src=</button>
            </div>
        )
    }
}

export default VoteButton;