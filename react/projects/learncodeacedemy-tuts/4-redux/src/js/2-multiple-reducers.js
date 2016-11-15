import { combineReducers, createStore } from "redux";

// I would live in a separate file
//now we can set defualt values in the argument it's self
//state={}
const userReducer = (state={}, action) => {
  switch(action.type) {
    case "SET_NAME": {
      //here we destructure the current state, taking what's in the current state
      //and adding the new name property. state mush never be modified, only retun a new 
      //modified version of it
      return {...state, name: action.payload};
      break;
    }
    case "SET_AGE": {
      return {...state, age: action.payload};
      break;
    }
  }
  return state;
}

// I would live in a separate file
const tweetsReducer = (state=[], action) => {
  switch(action.type) {
    case "ADD_TWEET": {
      return state.concat({
        id: Date.now(), //fake an ID by using a timestamp
        text: action.payload,
      });
      break;
    }
  }
  return state;
}


const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})

const store = createStore(reducers);

//before going to combine reducesr, it would look like this:
// const store = createStore(reducers, {
//     user: {
//       name: "Will",
//       age: 35
//     },
//     tweets: []
// });


store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch({type: "SET_NAME", payload: "Will"})
store.dispatch({type: "SET_AGE", payload: 35})
store.dispatch({type: "SET_AGE", payload: 34})
store.dispatch({type: "ADD_TWEET", payload: "OMG LIKE LOL"})
store.dispatch({type: "ADD_TWEET", payload: "I am so like seriously like totally like right now"})
