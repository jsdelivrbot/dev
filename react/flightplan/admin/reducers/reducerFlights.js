import * as actionTypes from '../actions/types';

export default function reducerFlights (state = [], action) {
 
    switch (action.type) {

        case actionTypes.FETCH_FLIGHTS:

            return action.payload;

        default:

            return state;

    }
    
}
