import { applyMiddleware, createStore } from "redux";
import axios from "axios";
// logger makes logs of our prev. state, action that was fired, etc
//in the console. we apply this as a middleware.
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

//here we populate some initial state
const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_USERS_ERROR": {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "RECEIVE_USERS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload,
      }
      break;
    }
  }
  return state
}

const middleware = applyMiddleware(promise(), thunk, logger())
const store = createStore(reducer, middleware)

//instead of the below method, when using redux thunk, we
//dispatch a dispatch. Now multiple actions are hapenning with one action
//this way we can handle async actions.
store.dispatch((dispatch) => {
  dispatch({type: "FETCH_USERS_START"})
  axios.get("http://rest.learncode.academy/api/wstern/users")
  .then((response => {
    dispatch({type: "RECEIVE_USERS", payload: response.data})
  }))
  .catch((err) => {
    dispatch({type: "FETCH_USERS_ERROR", payload: err})
  });
});

//this method uses redux promise.
//it's more concise, but less flexable.
//it automatically detects that you're using a promise and it dispatches auto-generated actions
//based on it's type. In this case it woule be:
//"FETCH_USERS_PENDING"
//"FETCH_USERS_FULFILLED"
//"FETCH_UISERS_REJECTED"
//so you just have to create reducers to accomodate these.

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})
