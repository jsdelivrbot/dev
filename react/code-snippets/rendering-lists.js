//React automatically renders arrays of components into elements
//...
render() {
    var list = [
        <CreateTodo/>,
        <CreateTodo/>,
        <CreateTodo/>
    ]

    return (
        <ul>
            {list}
        </ul>
    );
}
//...

//quick way to map out list from object props

render() {
const { tweets } = this.props;
const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)
return <div>
            <ul>{mappedTweets}</ul>
        </div>
}


//----------------------------------

//...
//an example using .map
const videoItems = props.videos.map((video) => {
    //pass it the prop video
    //make sure to have a unique key for each list item so react knows to update
    //it indavidually when things re-render rathar than updating the entire list
    return ( 
        <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag} 
            video={video}  />
        );
});

// react is intelligent at rendering an array of components so {videoItems}
// is all you need for it to do so.
return (
    <ul className ="col-md-4 list-group">
    {videoItems}
    </ul>  
);
//...

//----------------------------------

//a tidy inline version...
//...
return (
        <div>
            {this.props.list.map(function(data, i) {
                return (<Component data={data} key={i} />)
            })}
        </div>
    );
//...





