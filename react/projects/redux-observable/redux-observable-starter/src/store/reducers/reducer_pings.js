import {
    PING, 
    PONG
} from '../actionTypes';

export const reducerPings = function (state = { isPinging: false }, action) {
    switch (action.type) {
        case PING:
        console.log('ping');
            return { isPinging: true };
        case PONG:
        console.log('pong');
            return { isPinging: false };
        default:
            return state;
    }
};
