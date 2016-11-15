import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component {
    //avoid using context unless you have to. It's still in flux and may change in future release of react
    //only use it here becasue react router needs it.
    //this is defining an object on the PostsNew class. Basically it's giving us access to a property called this.context.router
    //in our component it will search all the way up to our router in index.js and the routwer will provide the context
    static contextTypes = {
      router: PropTypes.object
    };
    
    onSubmit(props) {
        //the createPost action creator returns a promise
        //so we will use this to fire the router push.
        this.props.createPost(props)
        .then(() => {
            //blog post has been created, navigate the user to the index
            //we navigate by calling this.context.router.push with the
            //new path to navigate to.
            this.context.router.push('/');
        });
    }
    
    render() {
         // same as const handleSubmit = this.props.handleSubmit;
         // same as const title = this.props.fields.title; etc...
        const {fields: {title, categories, content}, handleSubmit} = this.props;
        //console.log(title);
        
        //{...title} destructures all te properties in the found in the title object.
        //and puts them into the element like onChange={title.onChange} etc.
        //see the above console log to see what is contained in title. 
        //This way redux form can entirely control the input
        //handleSubmit gets called as soon as the form submits. If it's successful
        //it calls our action creator that we pass to it as a parameter
        //title.touched is a built in helper function in redux form that fires if the input has been 'touched'
        //title.invalid is another helper to specify if the field is invalid in this case we use it to modify the className for css
        
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create A New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}` }>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}` }>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}` }>
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

//form validation
//an object gets returned from validate and if it has a key that matches one of the field names of our form 
//, then submission fails ads a couple properties to the filed configuration object.
//and a couple of extra error properties are added to the form. We consume that in the form ex: title.error
function validate(values) {
    const errors = {};
    
    if(!values.title) {
        errors.title = 'Enter a username';
    }
    
    if(!values.categories) {
        errors.categories = 'Enter a categories';
    }
    
    if(!values.content) {
        errors.content = 'Enter some content';
    }
    
    return errors;
}

//here's where we pass in the configuration to
//redux form
//form: 'some unique name'
//fields: 'inputs to watch and create configuration for'
//behind the scenes:
//it pulls the state from the component level back up the the application level
// state === {
//     form: {
//         PostsNewForm: {
//             title: '....',
//             categories: '....',
//             content: '....'
//         }
//     }
// }
//it also injects props into our component like we've see before
//reduxform has the exact same behavior as connect and can be used to inject our action creators into our component
//and create a container out of our component the difference only is that it has one additional argument to it.
//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: first arg is form config (which also maps state to props only in the form of form data), 2nd is mapStateToProps, 3rd is mapDispatchToProps
//
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, {createPost})(PostsNew);