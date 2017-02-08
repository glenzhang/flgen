## tpl
1. 采用spa
2. 唯一入口src/index.html
3. 其他views放入src/views/xx.jsx

## css
1. 支持less
2. 支持css-style(混淆class name)
3. 生成单一css文件

## 背景图
1. css sprite
2. 单个文件不超过1kb的时候转为base64

## JS
1. 公用通用文件
2. 按需加载

## 编译
1. nimoo

## 调试
1. dev-server
2. hrm

## 发布
1. nimoo?http-push


## issues
1. fix 禁止生成.js.map
2. css打包成独立的文件后，改变内容后自动更新参加https://github.com/webpack/extract-text-webpack-plugin/issues/30 解决方案：在开发环境禁止打包单独css文件。
    `new ExtractTextPlugin('css/app.[hash:10].css', {disable: process.env.NODE_ENV !== 'production'})`
3. dev server启动后，自动打开浏览器, 在dev server的监听回调函数里面执行open