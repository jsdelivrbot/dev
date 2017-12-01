
//Naming components
//---------------------------------------------------------------------------------------------//
//capitalized types indicate that it's a component and not an HTML element
//you can create a component this way:

function MyComponent() {
  return <div>Hello</div>;
}

//spread
//---------------------------------------------------------------------------------------------//
//useful when building generic containers
//use it sparingly so as to not pass in a bunch of irrelevant props
//the below evaluates to:
//<Greeting firstName="Ben" lastName="Hector" />
function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}

