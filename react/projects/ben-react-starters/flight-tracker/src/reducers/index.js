import { combineReducers } from 'redux';
import FlightsReducer from './reducer_flights';


const rootReducer = combineReducers({
  flights: FlightsReducer
});

export default rootReducer;