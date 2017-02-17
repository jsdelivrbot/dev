import * as actionTypes from '../actions/types';

export default function reducerErrors (state = '', action) {
    
    switch (action.type) {

        case actionTypes.FETCH_FLIGHTS_ERROR:

            return action.payload;

        default:

            return state;

    }
    
    
}