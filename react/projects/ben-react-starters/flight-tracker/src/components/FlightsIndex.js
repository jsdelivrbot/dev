
import React, { Component, PropTypes } from 'react';
import {actions} from '../actions/flights';


class FlightsIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onOptionClick(option) {

    //http://<root-url>/flights/departures
    //http://<root-url>/flights/arrivals
    this.context.router.push(`flights/${option}`);

  }


  render() {
      return (
              <div>
                <div className="row">
                  <div className="medium-12 columns center">
                    <img className="logo-home" title="Flight Tracker" alt="simple flight tracker" src="assets/images/logo-home.png"/>
                    <div className="spacer-lg">&nbsp;</div>
                  </div>
                </div>
                <div className="row">
                  <div className="medium-6 columns">
                    <button href="#" className="btn wide solid large left-side orange" onClick={this.onOptionClick.bind(this, 'departures')}>departures<i className="fa fa-plane" aria-hidden="true"></i></button>
                  </div>
                  <div className="medium-6 columns">
                    <button href="#" className="btn wide solid large right-side blue" onClick={this.onOptionClick.bind(this, 'arrivals')}>arrivals<i className="fa fa-plane" aria-hidden="true"></i></button>
                  </div>
                </div>
              </div>
            )
          }
}

let compData = {

};

export default FlightsIndex;
