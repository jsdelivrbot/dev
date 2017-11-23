//import some code we need
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheed = React.StyleSheet;

//style the React component
//does not use css, but borrows concepts from css
var styles = Stylesheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

//component
var Weekdays = React.createClass({
	render: function() {
		return <View style={styles.container}>
			<Text>
				Days of the week:
			</Text>
		</View>
	}
});

//Show our component in the 'weekdays' app
AppRegistry.registerComponent('weekdays', function() {
	return Weekdays
});