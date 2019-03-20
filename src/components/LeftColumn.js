import React, { Component } from 'react';
import Select from 'react-select';
import matchdata from '../data/matchdata.json';

class LeftColumn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      store: 'coles',
      country: 'australia'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name ]: event.target.value })
  }

  render() {

    var stores = JSON.parse(matchdata);

    // var stores = [
      // { value: 'coles', label: 'Coles' },
      // { value: 'dick smith', label: 'Dick Smith' },
      // { value: 'target', label: 'Target' }
    // ]

    return (
      <nav className = "LeftColumn pa4 black-80">
        <div>
          Enter the store you're finding an equivalent for...
        </div>
        <form className="measure center">
          <fieldset className="ba b--transparent ph0 mh0">
            <div className="mt3">
              <label className="db fw6 lh-copy f6 tl">Store name:</label>
              <Select options = {stores} />
              {/* <input className="pa2 input-reset ba bg-transparent" type="text" name="store" value={this.state.store} onChange={this.handleChange} /> */}
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 tl">Country name:</label>
              <input className="pa2 input-reset ba bg-transparent" type="text" name="country" value={this.state.country} onChange={this.handleChange} />
            </div>
          </fieldset>
        </form>
      </nav>
    )
  }
}

export default LeftColumn;