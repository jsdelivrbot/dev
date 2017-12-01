import React, {Component} from 'react';
import {connect} from 'react-redux';
//no longer needed as the below uses the shorthand
//import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
//Link is an actual react component provided by react router it will show up as an html anchor tag.
//The advantage is that ia really behaves like a real link with all it's perks
import {Link} from 'react-router';

class PostsIndex extends Component {
    //this is a lifecyclemethod. If present, React will call this automatically whenever our compoenent is about to be rendered
    //to the dom for the first time. Here's where we should put our action creator in this case
    componentWillMount() {
        this.props.fetchPosts();
    }
    
    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/" + post.id}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            );
        });
    }
    
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {posts:state.posts.all};
}

// the below is a shorthand way of doing this:
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchPosts}, dispatch);
// }
// export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
//
export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex);
//above is the sama as:
//{fetchPosts: fetchPosts}