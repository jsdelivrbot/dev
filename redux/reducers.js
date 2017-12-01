//Reducers
//------------------------------------------------------------------//
//------------------------------------------------------------------//

// Since one of the core tenets of Redux is to never mutate state, 
// you'll often find yourself using Object.assign() to create copies of objects with new or updated values. 
// For example, in the todoApp below Object.assign() is used to return a new state object with an updated visibilityFilter property:

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}

//An alternative approach is to use the object spread syntax to copy enumerable 
//properties from one object to another in a more succinct way. The object spread operator 
//is conceptually similar to the ES6 array spread operator. We can simplify the todoApp 
//example above by using the object spread syntax:

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return { ...state, visibilityFilter: action.filter }
    default:
      return state
  }
}

//The advantage of using the object spread syntax becomes more apparent when you're 
//composing complex objects. Below getAddedIds maps an array of id values to an array 
//of objects with values returned from getProduct and getQuantity.

return getAddedIds(state.cart).map(id => Object.assign(
  {},
  getProduct(state.products, id),
  {
    quantity: getQuantity(state.cart, id)
  }
))
//Object spread lets us simplify the above map call to:

return getAddedIds(state.cart).map(id => ({
  ...getProduct(state.products, id),
  quantity: getQuantity(state.cart, id)
}))


//set all objects to false
(function() {
 var INITIAL_STATE = [
  { id: 'techStartup', isSet: true, name: "Tech startup" },
  { id: 'contractors', isSet: false, name: "Contractors" },
  { id: 'professionalServices', isSet: true, name: "Professional Services" },
  { id: 'wholesaleDistribution', isSet: false, name: "Wholesale and distribution" },
  { id: 'everythingElse', isSet: false, name: "Everything else" }
];
  
 let modified2 = INITIAL_STATE.map((item) => {
   let itemCopy = {...item};
   itemCopy.isSet = false;
   return itemCopy;
});
  
 console.log(modified2);
 
 }());
