import * as actionTypes from '../actions/types';

export default function reducerGMTtime (state = '', action) {
    
    switch (action.type) {

        case actionTypes.GMT_TIME:

            return action.payload;

        default:

            return state;

    }
    
}