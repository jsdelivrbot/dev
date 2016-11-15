//-----------------------------------------------------//

//passing query parameter from router to props
//app.js
//...
//only match if you have a title in the hash
<Route path="archives/:title" name="archives" component={Archives}/>
//match whether or not there is a titlein hash
<Route path="archives(/:title)" name="archives" component={Archives}/>
//...

//component
//...
render() {
    return (
        <h1>{this.props.title}</h1>
    );
}
//...

//-----------------------------------------------------//

//-----------------------------------------------------//

//get active route

//Link:
//adding activeClassName (helps for active menu item styling)
<Link to="archives" activeClassName="active">archives</Link>
//...

//or manually:
console.log(history.isActive("archives"));


//-----------------------------------------------------//