//reducer is called whenever a action is called from the app.
// State argument is *not application state, only the state
// previous state of this particular reducer. Every time an action is called, the state
// is updated from prev. value so you could do: return state += 1 for example
// we do state = null because when app launches, state will be undefined before any action is called
// so we must give it an initial value
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  //else, I don't care about this action sent to me, do nothing
  //and return current state  
  return state;
}
