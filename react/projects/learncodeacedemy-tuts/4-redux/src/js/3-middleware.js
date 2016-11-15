import { applyMiddleware, createStore } from "redux";

const reducer = (initialState=0, action) => {
  if (action.type === "INC") {
    return initialState + 1;
  } else if (action.type === "DEC") {
    return initialState - 1;
  } else if (action.type === "MULT") {
    throw new Error("AHHHH!!");
  }
  return initialState;
}

//normally you wouldn't need to make your own middleware, but here's how to:
//all actions would run through this middleware first.
//uses currying, but you probably won't need to worry about it's use
//just access the arguemnts
const logger = (store) => (next) => (action) => {
  console.log("Logged", action);
  //this allows us to go onto the next action
  return next(action);
};

//second type of middleware
//custom error handler
const errorHandler = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch(e) {
    console.log("ERROR!", e);
  }
};

const middleware = applyMiddleware(
  logger,
  errorHandler
)
const store = createStore(reducer, middleware)

store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
//the below will throw an error because it get's handled by our
//errorHandler middleware
store.dispatch({type: "MULT"})
store.dispatch({type: "DEC"})
