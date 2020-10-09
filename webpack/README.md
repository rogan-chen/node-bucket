## 1. 什么是webpack

webpack可以看做是模块打包机：他做的事情是，分析你的项目结构，找到JavaScript模块以及其他的一些资源浏览器不能直接运行的拓展语言（scss、typescript），并将其打包成合适的格式以供浏览器使用。

构建就是把源代码转换成发布到线上的可执行JavaScript、CSS、HTML代码，包括如下内容：

- 代码转换：typescript编译成JavaScript、SCSS编译成CSS等
- 文件优化：压缩JavaScript、CSS、HTML代码，压缩合并图片
- 代码分割：提多个页面的公共代码、提首屏不需要执行部分的代码让其异步加载
- 模块合并：在采用模块化的项目中会有很多模块和文件，需要构建功能把模块分类合并成一个文件
- 自动刷新：监听本地源代码的变化，自动重新构建，刷新浏览器
- 代码校验：在代码被提交到仓库前需要检验代码是否符合规范、以及单元测试是否通过
- 自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统

构建其实是工程化、自动化思想在前端开发中的体现，把一系列流程用代码实现，让代码自动化的执行这一系列复杂流程，构建给前端开发注入了更大的活力，解放了我们的生产力

## 2. 初始化项目

```shell
mkdir zhufeng-webpack
cd zhufeng-webpack
npm init -y
```

## 3. 快速上手

#### 3.1 webpack核心概念

- entry：入口，webpack执行构建的第一步将从entry开始，可抽象成输入
- module：模块，在webpack里一切皆模块，一个模块对应着一个文件，webpack会从配置的entry开始递归找出所有依赖的模块
- chunk：代码块，一个chunk有多个模块组合而成，用于代码合并与分割
- loader：模块转换器，用于把模块原内容按照需求转换成新内容
- plugin：扩展插件，在webpack构建流程中的特定时机注入扩展逻辑来改变构建结果或者做你想要做的事情
- output：输出结果，在webpack经过一系列处理并得出最终想要的代码后输出结果

> webpack启动后会从entry里配置的module开始递归解析entry依赖的所有module，每找到一个module，就会根据配置的loader去找出对应的转换规则，对module进行转换后，在解析出当前module依赖的module。这些模块会议entry为单位进行分组，一个entry和它所依赖的module备份到一个组，也就是一个chunk，最后webpack会把所有chunk转换成文件输出。在整个流程中会webpack会在恰当的时机执行plugin里定义的逻辑。

#### 3.2 配置webpack

```shell
npm install webpack webpack-cli -D
```

###### 3.2.1 src目录

```shell
mkdir src
```

###### 3.2.2 dist目录

```shell
mkdir dist
```

###### 3.2.3 基本配置文件

- webpack.config.js

```JavaScript
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {},
    plugins: [],
    devServer: {}
};
```

- 创建dist
    - 创建index.html

- 配置文件webpack.config.js
    - entry：配置入口文件的地址
    - output：配置出口文件的地址
    - module：配置模块，主要用来配置不同文件的加载器
    - plugins：配置插件
    - devServer：配置开发服务器

###### 3.2.4 index.html文件

###### 3.2.5 mode

- webpack的mode配置用于提供模式配置选项告诉webpack相应的使用其内置的优化，mode有以下三个可选值：
    - development
    - production
    - none

- common

```JavaScript
// parent chunk中解决了的chunk会被解决
optimization.removeAvailabelModules: true

// 删除空的chunks
optimization.removeEmptyChunks: true

// 合并重复的chunk
optimization.mergeDuplicateChunks: true
```

- development

```JavaScript
// 调试
devtool: eval

// 缓存模块，避免在未更改时重建他们
cache: true

// 缓存以及解决的依赖项， 避免重新解析他们
module.unsafeCache: true

// 在bundle中引入「所包含模块信息」的相关注释
output.pathinfo: true

// 在可能的情况下确定每个模块的导出，被用于其他优化或者代码生成
optimization.providedExports: true

// 找到chunk中共享的模块，取出来生成单独的chunk
optimization.splitChunks: true

// 为webpack运行时代码创建单独的chunk
optimization.runtimeChunk: true

// 编译错误时候不写入到输出
optimization.noEmitOnErrors: true

// 给模块有意义的名称替代ids
optimization.namedChunks: true
```

- production

```JavaScript
// 性能相关配置
performance: { hints: 'error' ... }

// 某些chunk的子chunk以一种被确定和标记，这些子chunks在加载更大的块时不必加载
optimization.flagIncludedChunks: true

// 给经常使用的ids更短的值
optimization.occurrenceOrder: true

// 确定每个模块下被使用的导出
optimization.usedExports: true

// 识别package.json or rules.sideEffects标志
optimization.sideEffects: true

// 尝试查找模块图中可以安全连接到单个模块中的段
optimization.concatenateModules: true

// 使用uglify-js压缩代码
optimization.minimize: true
```

## 4. 配置开发服务器

```shell
npm install webpack-dev-server -D
```

- contentBase 配置开发服务运行时的文件目录
- host 开发服务器监听的主机地址
- compress 开发服务器是否启动gzip等压缩
- port 开发服务器监听的端口

```JavaScript
devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    compress: true,
    port: 8080
}
```

```JavaScript
scripts: {
    build: 'webpack',
    dev: 'webpack-dev-server --open'
}
```

## 5. 支持加载CSS文件

#### 5.1 什么是loader

通过使用不同的loader，webpack可以要把不同的文件都转成JS文件，比如CSS、ES6/7、JSX等

- test：匹配处理文件的扩展名的正则表达式
- use：loader名称，就是你要使用模块的名称
- include/exclude：手动指定必须处理的文件夹或者屏蔽不需要处理的文件夹
- query：为loaders提供额外的设置选项

#### 5.2 loader三种写法

- css-loader
- style-loader

###### 5.2.1 loader

加载CSS文件，CSS文件有可能在node_moduels里面，比如bootstrap和antd

```JavaScript
module: {
    rules: [
        {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
        }
    ]
}
```

###### 5.2.2 use

###### 5.2.3 use+loader

## 6. 插件

#### 6.1 自动产出HTML

## 7. 支持图片

#### 7.1 手动添加图片

#### 7.2 JS中引入图片

#### 7.3 在CSS中引入图片

## 8. 分离CSS

#### 8.1 安装依赖模块







