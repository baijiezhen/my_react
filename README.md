1.安装所需插件
路由
yarn add react-router-dom axios less-loader
ui 组件
ant-D 2. antd 按需加载
yarn add babel-plugin-import
package.json 中添加
"plugins": [
["import", {
"libraryName": "antd",
"libraryDirectory": "es",
"style": "css"
}]
]
2 主页结构分析定义，防止后期重构

文件报错
// var \_createBrowserHistory = require('history/createBrowserHistory');
import {createBrowserHistory} from 'history';
