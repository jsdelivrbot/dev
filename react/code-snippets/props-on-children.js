//You can use React.Children to iterate over the children, 
//and then clone each element with new props (shallow merged) using React.cloneElement e.g:

const Child = React.createClass({
  render: function() {
    return <div onClick={() => this.props.doSomething(this.props.value)}>Click Me</div>;
  }
});

const Parent = React.createClass({
  doSomething: function(value) {
    console.log('doSomething called by child with value:', value);
  },

  render: function() {
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       doSomething: this.doSomething
     })
    );

    return <div>{childrenWithProps}</div>
  }
});

ReactDOM.render(
  <Parent>
    <Child value="1" />
    <Child value="2" />
  </Parent>,
  document.getElementById('container')
);