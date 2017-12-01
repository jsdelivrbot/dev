import {
    CHANGE_AUTH
} from '../actions/types';

const INITIAL_STATE = { authenticated: false }

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_AUTH:
        return { ...state, authenticated: action.payload };
    }
    
    return state;
}