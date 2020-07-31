import React, { Component } from 'react';

class RightColumn extends Component {

  state = {
  }

  render() {
    console.log(this.props.rightSelection);
    return (
      <nav className = "RightColumn pt4-ns black-80">
        <div className = "h2-ns">
          We've found the following match...
        </div>

        <form className="measure center">
          <fieldset className="ba b--transparent ph0 mh0">
            <div className="mt3">
              <label className="db fw6 lh-copy f6 tl">Country name:</label>
              <input className="pa2 input-reset ba bg-transparent" type="text" name="country" value="" />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 tl">Store name:</label>
              <input className="pa2 input-reset ba bg-transparent" type="text" name="storevalue" value={this.props.rightSelection} />
            </div>
          </fieldset>
        </form>

      </nav>      

    )
  }
}

export default RightColumn;