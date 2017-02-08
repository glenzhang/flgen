var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var open = require("open");

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: "dist",
    hot: true,
    historyApiFallback: true,
    header: { 'Access-Control-Allow-Origin': '*' },
    stats: {
        colors: true, //在控制台显示文件颜色
        chunks: false //控制台不出现编译记录
    }
}).listen(3000, '127.0.0.1', function(err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at 127.0.0.1:3000');

    setImmediate(function() {
        open("http://127.0.0.1:3000");
        console.log("open browser");
    });
});