
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

//components
import ButtonComponent from './ButtonComponent';

//utilities
import HOCflights from './HOCflights';

class FlightsIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  onOptionClick(option) {

    //callback to parent
    this.props.onOptionClick(option);

    //http://<root-url>/flights/departures
    //http://<root-url>/flights/arrivals
    browserHistory.push(`${option}`);

  }

  render() {
    return (
            <div>
              <div className="row">
                <div className="medium-12 columns center">
                  <img className="logo-home" title="Flight Tracker" alt="simple flight tracker" src="public/images/logo-home.png"/>
                  <div className="spacer-lg">&nbsp;</div>
                </div>
              </div>
              <div className="row">
                <div className="medium-6 columns">
                  <ButtonComponent 
                    name={this.props.flightType[0].name} 
                    onClickProp={this.onOptionClick.bind(this, this.props.flightType[0].id)} 
                    isSelected={this.props.flightType[0].isSet} 
                    icon={this.props.flightType[0].icon} 
                    classProp={this.props.flightType[0].class} 
                  />
                </div>
                <div className="medium-6 columns">
                  <ButtonComponent 
                    name={this.props.flightType[1].name} 
                    onClickProp={this.onOptionClick.bind(this, this.props.flightType[1].id)} 
                    isSelected={this.props.flightType[1].isSet} 
                    icon={this.props.flightType[1].icon} 
                    classProp={this.props.flightType[1].class} 
                  />
                </div>
              </div>
            </div>
          )
        }
}

let compData = {

};

export default HOCflights(FlightsIndex);
