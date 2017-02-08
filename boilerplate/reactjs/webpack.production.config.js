var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    //enable dev source map
    devtool: 'cheap-module-source-map',
    entry: {
        app: [
            path.join(APP_DIR, 'index.jsx')
        ],
        vendors: ['react']
    },

    output: {
        path: BUILD_DIR + "/public",
        filename: "js/[name].[hash:10].bundle.js",
        publicPath: "//static2.51fanli.net/public/", 
        chunkFilename: "js/[chunkhash:10].bundle.js"
    },

    resolve: {
        // We can now require('file') instead of require('file.jsx')
        extensions: ['', '.js', '.jsx', '.css', '.less']
    },

    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR,
            loaders: ['react-hot', 'babel']
        }, {
            test: /\.css$/,
            include: APP_DIR,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            // Optionally extract less files
            // or any other compile-to-css language
            test: /\.less$/,
            include: APP_DIR,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }, {
            //@font-face
            test: /\.(woff2?|otf|eot|ttf)$/i,
            include: APP_DIR,
            loader: 'url?name=fonts/[name].[hash:10].[ext]'
        }, {
            test: /\.(jpe?g|gif|png|ico|svg)$/,
            include: APP_DIR,
            loader: 'url?limit=1024&name=font/[name].[hash:10].[ext]'
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Hello World app',
            template: path.join(__dirname, 'src/index.html'),
            filename: BUILD_DIR + '/index.html',
            minify: { collapseWhitespace: true, minifyJS: true },
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            //chunks: ['app', 'vendors'],
            //要把script插入到标签里
            inject: 'body'
        }),
        new ExtractTextPlugin('css/app.[hash:10].css'),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'js/react.js'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]
};

module.exports = config;