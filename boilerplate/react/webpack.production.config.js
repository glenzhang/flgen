var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var config = {
    //enable dev source map
    //devtool: 'eval-source-map',
    entry: {
        app: [
             path.join(APP_DIR, 'index.js')
        ],
        vendors: ['react']
    },

    output: {
        path: BUILD_DIR + "/public",
        filename: '[name].[hash:10].bundle.js',
        publicPath: 'public/',
        chunkFilename: "[chunkhash:10].bundle.js"
    },

    resolve: {
        // We can now require('file') instead of require('file.jsx')
        extensions: ['', '.js', '.jsx', '.scss']
    },

    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR,
            loaders: ['react-hot', 'babel']
        }, {
            test: /\.css/,
            include: APP_DIR,
            loader: 'style!css'
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Hello World app',
            template: path.join(__dirname, 'index.html'),
            filename: BUILD_DIR + '/index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            //chunks: ['app', 'vendors'],
            //要把script插入到标签里
            inject: 'body'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'react.js'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            } 
        })
    ]
};

module.exports = config;
