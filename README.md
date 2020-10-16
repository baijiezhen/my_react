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
