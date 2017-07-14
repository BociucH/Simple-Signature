var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/main.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		loaders: [
	    	{ test: /\.tsx?$/, loader: 'ts-loader' }
	    ]
	},
	plugins: [
		new webpack.ProvidePlugin({
			jQuery: 'jquery'
		}),
		new webpack.optimize.UglifyJsPlugin({})
	]
};