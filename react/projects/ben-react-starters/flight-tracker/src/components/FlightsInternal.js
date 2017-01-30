
import React, { Component } from 'react';

//components
import Search from './search';

//utilities
import HOCflights from './HOCflights';

class FlightsInternal extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  lastUpdated() {

    var currentdate = new Date(); 
    var datetime = currentdate.getHours() + ": " + currentdate.getMinutes();
    return datetime;

  }

  onSearchValueChange(searchValue) {
    console.log(searchValue);
  }


  render() {
    return (
            <div>
              <img className="logo-home" title="Flight Tracker" alt="simple flight tracker" src="/assets/images/logo-internal.png"/>
              <div className="last-updated">{`last updated: ${this.lastUpdated()}`} </div>
              <div className="spacer-lg">&nbsp;</div>
              <Search onSearchValueChange={this.onSearchValueChange.bind(this)} />
              <table>
                <tbody>
                <tr>
                  <th>Airline</th><th>Flight#</th><th>From</th><th>Scheduled</th><th>Estimated</th><th>Status</th><th>Term</th>
                </tr>
                <tr>
                  <td>Cubana</td><td>CU184</td><td>Santa Clara</td><td>Jan 14, 00:10</td><td>Jan 14, 00:10</td><td>Arrived</td><td>1</td>
                </tr>
                

                </tbody>
              </table>
            </div>
      )
  }

}

let compData = {

};

export default HOCflights(FlightsInternal, compData);
