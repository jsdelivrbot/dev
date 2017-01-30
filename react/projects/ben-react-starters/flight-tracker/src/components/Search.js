
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

    this.setState({ inputValue });
    //callback function to parent
    this.props.onSearchValueChange(inputValue);

  }


  render() {
      return (
              <div className="search">
                <input 
                  type="text" 
                  className="form-control lookup-input" 
                  placeholder="city, flight#, or..."
                  onChange={(event) => this.onInputChange(event.target.value)}
                  value={this.state.inputValue}
                />
              </div>
            )
          }
}

let compData = {

};

export default Search;