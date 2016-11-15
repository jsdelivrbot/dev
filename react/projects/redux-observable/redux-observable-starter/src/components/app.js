import React, { Component } from 'react';
import Pinger from './pinger';

export default class App extends Component {
  render() {
    return (
		<div>      
			<div>Redux observable</div>
	      	<Pinger/>
      	</div>
    );
  }
}
