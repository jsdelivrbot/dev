import * as actionTypes from '../actions/types';

export default function reducerSearch (state = '', action) {
    
    switch (action.type) {

        case actionTypes.SEARCH_VALUE:

            return action.payload;

        default:

            return state;

    }

}