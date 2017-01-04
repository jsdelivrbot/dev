//reducer enhancer (higher order reducer)
//----------------------------------------------

//A reducer enhancer that doesn't do anything looks like this:
function doNothingWith(reducer) {
  return function (state, action) {
    // Just call the passed reducer
    return reducer(state, action)
  }
}

//A reducer enhancer that combines other reducers might look like this:

function combineReducers(reducers) {
  return function (state = {}, action) {
    return Object.keys(reducers).reduce((nextState, key) => {
      // Call every reducer with the part of the state it manages
      nextState[key] = reducers[key](state[key], action)
      return nextState
    }, {})
  }
}



