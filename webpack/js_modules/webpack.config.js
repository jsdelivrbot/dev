// this require is handled by the node runtime its-self, not by webpack
const path = require('path');
// entry: is a relative path and
// output > path: needs an absolute path on our hard drive to the project dir
// so we can use the path module (part of node.js)
// save it in a file called build

const ExtractTextPlugin = require('extract-text-webpack-plugin');



//babel-----
//babel loader: teaches babel how to work with webpack (many build systems out there)
//test: only apply to js files in our entire proj. *note, if a file isn't imported into
//another file that somehow connects to index.js, babel ignores it
//babel core: knows how to take in code and generate output files from it - used internally
//(*importantly it doesn't actually know how to turn es6 to es5)
//babel preset env: preset for telling babel how to turn es6 to es5
//when babel loads, will look at .babelrc file and know to run babel-preset-env


//css-----
//tell webpack to load both the style loader and css loader at the same time
//(executed from right to left - css-loader first then style-loader)
//use: ['style-loader', 'css-loader']
//css-loader: teach webpack how to import and parse css files
//style-loader: takes css imports (in our js files) and creates some javascript in bundle.js that creates styles in the html doc after the bundle scripts load.
//



const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		//it's a bit confusing but the url loader down below
		//goes back up here to use this to prepend to the statements that import the image at hand
		//but the good news it it will be used for any other reference to a file in the output directory
		publicPath: 'build/'
	},
	//in webpack2 loaders are now modules with rules
	//module loaders do pre-processing of files before they're added to the
	//bundle.js file
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/
			},
			{
				//use: ['style-loader', 'css-loader'],
				loader: ExtractTextPlugin.extract({
					//we need to fall back to lagacy 'loader' because of how the plugin is written
					loader: 'css-loader'
				}),
				test: /\.css$/
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [

						{
							//url loader takes the image in the assets folder and copies it over
							//to the build folder
							loader: 'url-loader',
							options: {
								//if images are greater thatn 40000kb large,
								//save it as a separate file, otherwize
								//inclue it in the bundle.js as binary data 
								limit: 40000
							 } 
						},
						'image-webpack-loader'
				]
			}
		]
	},
	//plugins------
	//loaders process things before they're included in the webpack bundle
	//plugins are work outside the webpack pipeline and have the ability to keep files from ending
	//up in the bundle output
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};

module.exports = config;