var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname + "/app",
	entry: "./js/app.js",
	output: {
	filename: "app.js",
		path: __dirname + "/dist",
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.json']
	},
  	module: {
    	loaders: [
    		{
        		test: /\.jsx?$/,
        		exclude: /node_modules/,
        		loaders: ["react-hot-loader", "babel-loader"]
      		}
    	]
  	},
	plugins: [new HtmlWebpackPlugin({
		title: 'Viaplay test'
	})]
};