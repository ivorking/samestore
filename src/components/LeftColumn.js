import React, { Component } from 'react';
import Select from 'react-select';
import matchdata from '../data/matchdata.json';

class LeftColumn extends Component {

  // constructor(props) {
  //   super(props);
  state = {
    store: 'coles',
    country: 'australia',
    selectedOption: null
  }
    // };

    // this.handleChange = this.handleChange.bind(this);

  handleChange = (event) => {
    this.setState({ [event.target.name ]: event.target.value })
  }

  handleSelection = selectedOption => {
    // this.setState({ selectedOption });
    // this.props.infoVar = selectedOption.value;
    console.log(`Option selected:`, selectedOption);
    this.props.infoVar(selectedOption.value)
  };

  componentDidUpdate = () => {
    console.log('updated');
  }

  render() {

    var inputdata = Object.keys(matchdata);
    const { selectedOption } = this.state;
    const stores = inputdata.map(v => ({
      label: v,
      value: v
    }));

    return (
      <nav className = "LeftColumn pa4 black-80">
        <div>
          {this.props.infoVar}
          Enter the store you're finding an equivalent for...
        </div>
        <form className="measure center">
          <fieldset className="ba b--transparent ph0 mh0">
            <div className="mt3">
              <label className="db fw6 lh-copy f6 tl">Store name:</label>
              <Select 
                value={selectedOption}
                onChange={this.handleSelection}
                options={stores}
              />
              {/* <input className="pa2 input-reset ba bg-transparent" type="text" name="store" value={this.state.store} onChange={this.handleSelection} /> */}
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 tl">Country name:</label>
              <input className="pa2 input-reset ba bg-transparent" type="text" name="country" value={this.state.country} onChange={this.handleChange} />
            </div>
          </fieldset>
        </form>
        {/* {this.props.infoVar = selectedOption}; */}
      </nav>
    )
  }
}

export default LeftColumn;