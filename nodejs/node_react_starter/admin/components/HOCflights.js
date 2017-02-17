import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//actions
import * as actions from '../actions/flights';

//this is a higher order component (HOC) that wraps the incomming component 
//and attaches additional functionality to it
export default function (ComposedComponent, compData) {
    class HOCflights extends Component {

      constructor(props) {
        super(props);
        this.state = {
          //searchValue : searchValue 
        }
      }

      onOptionClick(option) {

        //reset all buttons first
        this.props.flightType.map((item) => {
          this.props.changeFlightType(item.id, false);
        });

        //set state on current selection
        this.props.changeFlightType(option, true);

        this.getFlights(option);

      }

      getFlights(option) {

        //populate the list with placeholder data
        //this.props.fetchFlightsPlaceholder(option);

        //get arrivals/departures
        this.props.fetchFlights(option);

      }

      onSearchValueChange(searchValue) {

        this.props.changeSearchValue(searchValue);

      }

       onSearchSubmit(e) {

        //flight type, flight number ex: (departures, 100)
        this.props.fetchFlights(this.props.params.flightType, this.props.searchValue);
        //prevent form submission
        e.preventDefault();
        return false;

      }

      render() {
              //pass this.state and this.props to the composed component
              //access them both as this.props in the compoesed component
              return <ComposedComponent ref='composedComponent' onOptionClick={this.onOptionClick.bind(this)} getFlights={this.getFlights.bind(this)} onSearchSubmit={this.onSearchSubmit.bind(this)} onSearchValueChange={this.onSearchValueChange.bind(this)} {...this.props} {...this.state} />
              
          }
      }

      function mapStateToProps(state) {
        return {
          //redux state
          flightType: state.flightType,
          flights: state.flights,
          phone: state.phone,
          errors: state.errors,
          searchValue: state.searchValue,
          GMTtime: state.GMTtime
        }
      }
          
      return connect(mapStateToProps, actions)(HOCflights);
}