import _ from 'lodash';
import * as actionTypes from '../actions/types';


//set initial data for the profession setp
const INITIAL_STATE = [
	{ id: 'departures', isSet: false, name: "departures", class: "wide solid large left-side orange", icon: "fa-plane"},
	{ id: 'arrivals', isSet: false, name: "arrivals", class: "wide solid large right-side blue", icon: "fa-plane" },
];

function reducerFlightType (state = INITIAL_STATE, action) {

	let stateCopy = [];

  switch(action.type) {

    case actionTypes.FLIGHT_TYPE:

		//make a copy of state so as to not modify it:
		stateCopy = _.clone(state);

		//copy the object at the incoming index payload
		var data = _.find(stateCopy, function(item){ return item.id == action.idPayload; });
		//set it to true
		data.isSet = action.isSetPayload;

		// Find item index using indexOf+find
		// look in to the initial state array to find the id of he passed action payload
		var index = _.indexOf(stateCopy, _.find(stateCopy, {id: action.idPayload}));
		//console.log("found index: " + index);

		// Replace item at index using native splice
		stateCopy.splice(index, 1, data);
		
		return stateCopy;

	// case actionTypes.RESET_REDUCERS:

 //    	//return initial state
 //    	return INITIAL_STATE;

    default:
    
        return state;
  }
}

export default reducerFlightType;