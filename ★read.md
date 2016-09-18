# 把做好的项目上传到github

## 1 新建一个文件夹在一个与世无争的地方
## 2 把项目里的除node_modules和build以外的文件复制并粘贴到步骤一建的文件夹
## 3 npm i 安装所需的东西
## 4 改index.html
```
//由
<script type="text/javascript" src="/boundle.js">
</script>

//改为
<script type="text/javascript" src="./build/boundle.js">
</script>
```

## 4 改webpack.config.js
```
output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'boundle.js',
    publicPath: "./build/"
},
devServer: {

  // publicPath: "/static/",
    stats: {
        colors: true,
        hot: true
    },
    port: 3003,
    inline: true,
    historyApiFallback:true
},
```

## 5 在另一个与世无争的地方建一个新文件夹

把1建的文件夹里的index.html和build文件夹拷出来，自此这个文件夹作为上传到git的组中版
tip:要把所有的historyApiFallback变成hashHistory

## 6 注意
以后就用现在配好的这种webpack.config.js和index.html
起服务器webpack.config.js
```
output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'boundle.js',
    publicPath: "/build/"
},
```
打包
```
output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'boundle.js',
    publicPath: "./build/"
},
```
