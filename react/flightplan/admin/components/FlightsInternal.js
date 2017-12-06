
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

//components
import Search from './search';
import ButtonComponent from './ButtonComponent';
import FlightListItem from './FlightListItem';
import Modal from './Modal';
import Form from './Form';

//utilities
import HOCflights from './HOCflights';

class FlightsInternal extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount() {
    //get the flight type from the router url query
    //only needed for manual page refresh (and state erased) 
    //since this is also called from previouse page button click
    this.props.getFlights(this.props.params.flightType);

    //get the GMT time
    //will get to this once a feed service gets back to me :)
    //this.props.getGMTtime();

  }

  onFlightClick(id) {

    //open the modal
    this.refs.modal.openModal();

  }

  onOptionClick(option) {

    //update the route
    browserHistory.push(`${option}`);

    //callback to parent
    this.props.onOptionClick(option);

  }

  onSubmitPhone() {
    //console.log('onSubmitEmail called');
  }

  updateFields() {
    //console.log('updateFields called');
  }

  updateValid(isValid) {
    //console.log('updateValid called: ', isValid);
  }

  renderButtonList() {
    let buttonList = this.props.flightType.map((item) => {
      return <ButtonComponent 
                name={item.name} 
                onClickProp={this.onOptionClick.bind(this, item.id)} 
                isSelected={item.isSet} icon={item.icon} 
                classProp={`${item.class} option-btn`} 
                key={item.id} />
    });
    return buttonList;
  }

  renderFlightList() {
    let flightList = this.props.flights.map((item) => {
      return <FlightListItem 
                onClickProp={this.onFlightClick.bind(this)} 
                flightNumber={item.flightNumber} 
                flightFrom={item.flightFrom}
                flightTo={item.flightTo}
                departureTime={item.departureTime}
                arrivalTime={item.arrivalTime} 
                status={item.status} 
                key={item.id} />
    });
    return flightList;
  }

  render() {
    return (
            <div>
              <img className="logo-home" title="Flight Tracker" alt="simple flight tracker" src="public/images/logo-internal.png"/>
              <div className="last-updated">{`New York Flights (American Airlines)`} </div>
              <div className="spacer">&nbsp;</div>
              <Search onSearchValueChange={(searchValue) => {this.props.onSearchValueChange(searchValue)}} onSearchSubmit={(e) => {this.props.onSearchSubmit(e)}} />
              <div className="spacer">&nbsp;</div>
              <div className="top-option-holder">
                {this.renderButtonList()}
              </div>
              <table>
                <tbody>
                <tr>
                  <th>Flight#</th><th>From</th><th>To</th><th>Departure Time</th><th>Arrival Time</th><th>Status</th>
                </tr>
                {this.renderFlightList()}
                </tbody>
              </table>
              {this.props.errors &&
                <div>
                 {this.props.errors}
                </div>
              }

              <Modal ref="modal" onSubmit={this.onSubmitPhone.bind(this)}>
                <div className="center">
                  Please enter your phone number below and we'll text you with any changes to your flight
                </div>
                <div className="spacer"></div>
                <Form ref="form" classProp="modal-phone" fields={this.props.phone} updateFields={this.updateFields.bind(this)} updateValid={this.updateValid.bind(this)} />
              </Modal>

            </div>
      )
  }

}

let compData = {

};

export default HOCflights(FlightsInternal, compData);
