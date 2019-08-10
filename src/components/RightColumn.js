import React, { Component } from 'react';

class RightColumn extends Component {
  render() {
    return (

      // <nav className="RightColumn pa4 black-80">
      //   We've found the following equivalent...
      // </nav>

      <nav className = "RightColumn pa4 black-80">

        <div>
          Enter the store you're finding an equivalent for...
        </div>

        <form className="measure center">
          <fieldset className="ba b--transparent ph0 mh0">
            <div className="mt3">
              <label className="db fw6 lh-copy f6 tl">Store name:</label>
              <input className="pa2 input-reset ba bg-transparent" type="text" name="country" value="" />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 tl">Country name:</label>
              <input className="pa2 input-reset ba bg-transparent" type="text" name="country" value="" />
            </div>
          </fieldset>
        </form>

      </nav>      

    )
  }
}

export default RightColumn;