import React, { Component } from 'react';
import Select from 'react-select';
import matchdata from '../data/matchdata.json';

class LeftColumn extends Component {

  state = {
    store: 'coles',
    country: 'australia',
    selectedOption: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name ]: event.target.value })
  }

  handleSelection = selectedOption => {
    this.props.infoVar(selectedOption.value)
  };

  componentDidUpdate = () => {
  }

  render() {

    var inputdata = Object.keys(matchdata);
    const { selectedOption } = this.state;
    const stores = inputdata.map(v => ({
      label: v,
      value: v
    }));

    return (
      <nav className = "LeftColumn pt4-ns black-80">
        <div className = "h2-ns">
          {this.props.infoVar}
          Enter the store you're finding an equivalent for...
        </div>
        <form className="measure center">
          <fieldset className="ba b--transparent ph0 mh0">
            <div className="mt3">
              <label className="db fw6 lh-copy f6 tl">Store name:</label>
              <Select className = 'tl'
                value={this.selectedOption}
                onChange={this.handleSelection}
                options={stores}
              />
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