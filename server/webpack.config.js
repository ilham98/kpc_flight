var path = require('path')
var webpack = require('webpack')
var WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
	mode: 'development',
	entry: './src/app.js',
	devServer: {
		contentBase: './build'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: '/\.js/',
				loader: 'babel-loader',
				options: {
					presets: ['env']
				},
				// exclude: [
				// 	path.resolve(__dirname, "node_modules")
				// ]
			}
		]
	},
	plugins: [
		new WebpackShellPlugin({onBuildEnd: ['nodemon ./build/app.bundle.js --watch build']})
	],
	resolve: {
		modules: [
			"node_modules",
			path.resolve(__dirname, "./src")
		],
		extensions: [".js", ".json", ".jsx", ".css"]
	},
	target: "node"
}