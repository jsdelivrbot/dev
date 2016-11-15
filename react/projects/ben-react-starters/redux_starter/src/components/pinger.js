import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/ping';

class Pinger extends Component {


    onPingClick() {
    	this.props.ping();
    }

	render() {
		return (
				<div>
					<button type='button' onClick={this.onPingClick.bind(this)}>Ping</button>
					<div id="result"></div>
				</div>
			)
	}

}

function mapStateToProps(state) {
	return { isPinging: state.pings.isPinging }
	//return { isPinging: false }

}

export default connect(mapStateToProps, actions)(Pinger);