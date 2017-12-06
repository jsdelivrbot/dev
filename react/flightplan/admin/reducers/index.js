import { combineReducers } from 'redux';
import reducerFlights from './reducerFlights';
import reducerFlightType from './reducerFlightType';
import reducerPhone from './reducerPhone';
import reducerErrors from './reducerErrors';
import reducerSearch from './reducerSearch';
import reducerGMTtime from './reducerGMTtime';


const rootReducer = combineReducers({
  flights: reducerFlights,
  flightType: reducerFlightType,
  phone: reducerPhone,
  errors: reducerErrors,
  searchValue: reducerSearch,
  GMTtime: reducerGMTtime
});

export default rootReducer;