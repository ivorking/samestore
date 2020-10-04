import React, { Component } from 'react';
import Select from 'react-select';
import matchdata from '../data/matchdata.json';
import '../css/tachyons.css';
import 'tachyons-skins';

// define vars
var leftCountry;
var leftStore;
var lstores;
var lcountries;

class LeftColumn extends React.Component {

  componentWillMount = () => {
    var inputdataCountries = Object.keys(matchdata);
    lcountries = inputdataCountries.map(v => ({
      label: v,
      value: v
    }));
  }

  handleChange = (event) => {
    this.setState({ [event.target.name ]: event.target.value })
  }

  handleSelectionCountry = (leftCountry) => {
    this.props.infoVar(leftCountry)

    // update left column store list
    let templist = [];
    let countryKeys = Object.keys(matchdata[leftCountry.value]);
    let i;
    for (i = 0 ; i < countryKeys.length ; i++) {
      templist.push(Object.keys(matchdata[leftCountry.value][countryKeys[i]]))
    }
    let inputdataStores = templist.flat();

    lstores = inputdataStores.map(v => ({
      label: v,
      value: v
    }));
  
  };

  componentDidUpdate = () => {

  }

  handleSelectionStore = leftStore => {
    this.props.infoVar(leftStore)
  };

  render() {

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
                value={leftCountry}
                onChange={this.handleSelectionCountry}
                options={lcountries}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 tl">Store name:</label>
              <Select className = "t1 pa2 input-reset bg-transparent" type="text" name="store"
                value={leftStore}
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