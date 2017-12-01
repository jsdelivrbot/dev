// every single action in application flows through this middleware.
// {dispatch} is a function. We will use it to flow through all middlewares again

export default function({dispatch}) {
    return (next) => { 
        return (action) => {
            //if the action doesn't have a payload or the payload doesn't have a .then
            //(promise) then send it on
            if (!action.payload || !action.payload.then) {
                
                //next means to send this onto the next middleware in the stack.
                //if none exist, just send off to the reducers
                //action is stopped until we call next:
                return next(action);
            }
            
            //make sure the action's promise resolves
            action.payload.then(function(response) {
                //create a new action with the old type but replace
                //the promise with the response data.
                const newAction = { ...action, payload: response };
                //next just goes to next middleware, but dispatch runs entire cycle again.
                //the second time around it will no longer be a middleware (not a promise anymore).
                //Always call this - important to send it through again to catch every middleware
                dispatch(newAction);
            }); 
        }
    }
}

// this is the boilerplace signature of middlewares
// export default function({dispatch}) {
//     return function(next) {
//             return function (action) {
//                 console.log(action);
//                 next(action);
//             }
//         }
// }