import { createStore } from "redux";

//each time reducer is called, a new state is created
const reducer = (initialState=0, action) => {
  if (action.type === "INC") {
    return initialState + 1;
  } else if (action.type === "DEC") {
    return initialState - 1;
  }
  return initialState;
}

//reducer, initial state
const store = createStore(reducer, 1)

store.subscribe(() => {
  console.log("store changed", store.getState());
})

//dispatch must must have a "type" property
//and any other kind of property is fine
//but payload with an object is good practice
//like:
// store.dispatch({type: "", payload: {}})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
