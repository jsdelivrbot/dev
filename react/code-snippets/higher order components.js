//basic higher order component example.
//https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html


function withSubscription(WrappedComponent) {
  return React.createClass({
    getInitialState: function() {
      return {
        comments: DataSource.getComments()
      };
    },

    componentDidMount: function() {
      DataSource.addChangeListener(this.handleChange);
    },

    componentWillUnmount: function() {
      DataSource.removeChangeListener(this.handleChange);
    },

    handleChange: function() {
      this.setState({
        comments: DataSource.getComments()
      });
    },

    render: function() {
      // Use JSX spread syntax to pass all props and state down automatically.
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  });
}

// Optional change: convert CommentList to a functional component
// because it doesn't use lifecycle hooks or state.
function CommentList(props) {
  var comments = props.comments;
  return (
    <div>
      {comments.map(function(comment) {
        return <Comment comment={comment} key={comment.id} />
      })}
    </div>
  )
}

// Instead of declaring CommentListWithSubscription,
// we export the wrapped component right away.
module.exports = withSubscription(CommentList);