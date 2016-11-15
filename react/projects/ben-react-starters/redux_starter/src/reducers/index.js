import { combineReducers } from 'redux';
import PingReducer from './reducer_pings';


const rootReducer = combineReducers({
  pings: PingReducer
});

export default rootReducer;