import React, { Component } from 'react';
import Select from 'react-select';
import matchdata from '../data/matchdata.json';

class LeftColumn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOptionCountry: "Australia",
      selectedOptionStore: "KMart"
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name ]: event.target.value })
  }

  handleSelectionCountry = selectedOptionCountry => {
    this.props.infoVar(selectedOptionCountry.value)
    this.lcountry = selectedOptionCountry.value
  };

  handleSelectionStore = selectedOptionStore => {
    this.props.infoVar(selectedOptionStore.value)
    this.lstore = selectedOptionStore.value
  };

  componentDidUpdate = () => {
  }

  render() {

    var inputdataCountries = Object.keys(matchdata);
    var { selectedOptionCountry } = this.state;
    var lcountries = inputdataCountries.map(v => ({
      label: v,
      value: v
    }));

    // fix this
    let tempHold = "Australia"
    var inputdataStores = this.Object.keys(matchdata.tempHold.UK);
    var lstores = inputdataStores.map(v => ({
      label: v,
      value: v
    }));

    return (
      <nav className = "LeftColumn pt4-ns black-80">
        <div className = "h2-ns">
          {this.props.infoVar}
          Enter the country and store you're finding an equivalent for...
        </div>
        <form className="measure center">
          <fieldset className="ba b--transparent ph0 mh0">
            <div className="mt3">
              <label className="db fw6 lh-copy f6 tl">Country name:</label>
              {/* <input className="pa2 input-reset ba bg-transparent" type="text" name="country" value={this.state.lcountry} onChange={this.handleChange} /> */}
              <Select className = "tl pa2 input-reset bg-transparent" type="text" name="country" 
                value={this.selectedOptionCountry}
                onChange={this.handleSelectionCountry}
                options={lcountries}
              />

            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 tl">Store name:</label>
              <Select className = 'tl'
                value={this.selectedOptionStore}
                onChange={this.handleSelectionStore}
                options={lstores}
              />
            </div>
          </fieldset>
        </form>
      </nav>
    )
  }
}

export default LeftColumn;