//children
//---------------------------------------------------------------------------------------------//
//In JSX expressions that contain both an opening tag and a closing tag <el>...<el/>,
//the content between those tags is passed as a special prop: props.children

// Our Repeat component
// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

// *note {(index) => ... is not rendered out directly, 
//  it's just there to get passed to the component as props.children
function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}