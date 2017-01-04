import React, { Component } from 'react';
//import Pinger from './pinger'
 
import Nouislider from 'react-nouislider';




export default class App extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			value: 0 /** Start value **/
		};
	}

	sliderOnehandleChange (event) {
		this.setState({
			value: event.target.value
		});

		console.log(event.target.value);

	}

	render() {

		//let { value } = this.state;

		return (
			<div>      
			<div>slider</div>

			  <Nouislider
			    range={{min: 0, max: 200}}
			    start={[0]}
			  />
			</div>
			);
	}
}












