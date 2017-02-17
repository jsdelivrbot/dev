import _ from 'lodash';
import * as actionTypes from '../actions/types';


//initial data for form fields
const INITIAL_STATE = [
          { id: 'phone', value: '', label: 'Mobile (xxx-xxx-xxxx)', active: false, validate: 'phone', error: '' }
      ];

function reducerPhone (state = INITIAL_STATE, action) {

  switch(action.type) {

    case actionTypes.PHONE:
		
		  return action.payload;

	// case actionTypes.RESET_REDUCERS:

 //    	//return initial state
 //    	return INITIAL_STATE;

    default:
  
      return state;
  }
}

export default reducerPhone;