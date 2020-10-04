import React, { Component } from 'react';
import Select from 'react-select';
import matchdata from '../data/matchdata.json';
import '../css/tachyons.css';
import 'tachyons-skins';

var leftCountry = "Australia"
var rightCountry = "UK"

class LeftColumn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      leftCountry: "Australia",
      leftStore: "",
      lstores: {},
      lcountries: {},
      inputdataStores: []
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name ]: event.target.value })
  }

  handleSelectionCountry = leftCountry => {
    this.props.infoVar(leftCountry.value)
  };

  handleSelectionStore = leftStore => {
    this.props.infoVar(leftStore.value)
  };

  componentDidUpdate() {
    let templist = [];
    let countryKeys = Object.keys(matchdata[leftCountry]);
    let i;
    for (i = 0 ; i < countryKeys.length ; i++) {
      templist.push(Object.keys(matchdata[leftCountry][countryKeys[i]]))
    }
    this.inputdataStores = templist.flat();

  }

  render() {

    var inputdataCountries = Object.keys(matchdata);
    this.lcountries = inputdataCountries.map(v => ({
      label: v,
      value: v
    }));

    if (this.lstores) {
      this.lstores = this.inputdataStores.map(v => ({
        label: v,
        value: v
      }));
    }

    return (
      <nav className = "LeftColumn pt4-ns black-80">
        <div className = "h2-ns">
          {this.props.infoVar}
          {console.log(this.lcountries)}
          Enter the country and store you're finding an equivalent for...
        </div>
        <form className="measure center">
          <fieldset className="ba b--transparent ph0 mh0">
            <div className="mt3">
              <label className="db fw6 lh-copy f6 tl">Country name:</label>
              {/* <input className="pa2 input-reset ba bg-transparent" type="text" name="country" value={this.state.lcountry} onChange={this.handleChange} /> */}
              <Select className = "tl pa2 input-reset bg-transparent" type="text" name="country" 
                value={this.leftCountry}
                onChange={this.handleSelectionCountry}
                options={this.lcountries}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 tl">Store name:</label>
              <Select className = "t1 pa2 input-reset bg-transparent" type="text" name="store"
                value={this.leftStore}
                onChange={this.handleSelectionStore}
                options={this.lstores}
              />
            </div>
          </fieldset>
        </form>
      </nav>
    )
  }
}

export default LeftColumn;