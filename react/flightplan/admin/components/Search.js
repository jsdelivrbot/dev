
import React, { Component, PropTypes } from 'react';
//import {actions} from '../actions/flights';


class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onInputChange(inputValue) {

    this.setState({ inputValue }, () => {
      //callback function to parent
      this.props.onSearchValueChange(inputValue);
    });
  }


  render() {
      return (
              <div className="search">
                <form onSubmit={(e) => {this.props.onSearchSubmit(e)}}>
                  <input 
                    type="text" 
                    className="form-control lookup-input" 
                    placeholder="flight# (ex: 100)"
                    onChange={(event) => this.onInputChange(event.target.value)}
                    value={this.state.inputValue}
                  />
                </form>
              </div>
            )
          }
}

let compData = {

};

export default Search;