//hiding/showing components:
//---------------------------------------------------------------------------------------------//

//since components will only render if the expression eveluates to true...
<div />
<div></div>
<div>{false}</div>
<div>{null}</div>
<div>{true}</div>
//these are all equivelent

//therefore we can do this
//to render the header component if showHeader is true:
<div>
  {showHeader && <Header />}
  <Content />
</div>

//One caveat is that some "falsy" values, such as the 0 number, are still rendered by React. 
//For example, this code will not behave as you might expect because 0 will be printed when props.messages is an empty array:

<div>
  {props.messages.length &&
    <MessageList messages={props.messages} />
  }
</div>
//To fix this, make sure that the expression before && is always boolean:

<div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div>

//conditional element
var optionalElement;

if (this.props.condition) {
    optionalElement = (<div> … </div>);
}

return (
    <div>
        …
        {optionalElement}
        …
    </div>
);