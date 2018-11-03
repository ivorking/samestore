import React, { Component } from 'react';
import styled from 'styled-components';

class LeftColumn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      store: '',
      country: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name ]: event.target.value })
  }

  render() {

    // TableWrapper not currently working - cause DOM redraws on every keypress
    const TableWrapper = styled.div `
      padding: 10px;
      margin-left: 20px;
    `

    return (
      <nav className = "LeftColumn">
        {/* <TableWrapper> */}
          <form >
            <table>
              <tr>
                Store name:
                <input type="text" name="store" value={this.state.store} onChange={this.handleChange} />
              </tr>
              <tr>
                Country name:
                <input type="text" name="country" value={this.state.country} onChange={this.handleChange} />
              </tr>
            </table>
          </form>
        {/* </TableWrapper> */}
      </nav>
    )
  }
}

export default LeftColumn;