
import React, { Component } from 'react';

//components
import FlightsIndex from './FlightsIndex';
import FlightsInternal from './FlightsInternal';

//utilities
import HOCpage from './HOCpage';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {}

    //select from a list of components
    this.components = {
      FlightsIndex,
      FlightsInternal
    }

  }

  render() {
    //assign the component we want to use
    const SpecificComponent = this.components[this.props.route.componentType];
    return (
        <div id="main-wrapper" >
          <div ref="mainFrame" style={{height: this.props.height}} className="main-frame">
            <div className="inner-frame">
              <div className="row">
                <div className="medium-12 columns center">
                  <SpecificComponent {...this.props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }

}

let compData = {

};

export default HOCpage(Page, compData);