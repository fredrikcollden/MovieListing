var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

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
				test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, 
				loader: "file-loader",
			},
    		{
        		test: /\.jsx?$/,
        		exclude: /node_modules/,
        		loaders: ["react-hot-loader", "babel-loader"]
      		},
			{
				test: /\.css$/,
				loader: 'style-loader'
			}, 
			{
				test: /\.css$/,
				loader: 'css-loader',
				query: {
					modules: true,
					localIdentName: '[name]__[local]___[hash:base64:5]'
				}
			}
    	]
  	},
	plugins: [
		new HtmlWebpackPlugin({
		title: "Viaplay test",
		template: __dirname + "/app/index.html",
		filename: "index.html",
		inject: "body"
	}),
		/*new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('production')
		}
		}), 
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.AggressiveMergingPlugin()*/
	]
};