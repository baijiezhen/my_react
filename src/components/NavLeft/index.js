import React from 'react'
import { Menu, Icon } from 'antd';
import  menuConfig   from './../../config/menuConfig.js'
import './index.less'
const { SubMenu } = Menu;

console.log(menuConfig)
export default class NavLeft extends React.Component{
    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuConfig);

        this.setState({
            menuTreeNode
        })
    }
    //  菜单渲染
    renderMenu =(data)=>{
        return data.map((item) => {
            console.log(item)
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                {item.title}
                {/* <NavLink to={item.key}>{item.title}</NavLink> */}
            </Menu.Item>
        })
    }
    render(){
        return <div>
            <div className="logo">
                        <img src="/assets/logo-ant.svg" alt=""/>
                        <h1>Imooc MS</h1>
            </div>
            <Menu theme="dark" mode="vertical">
                {/* <SubMenu key="sub1" title={
        <span>
          <Icon type="mail" />
          <span>Navigation One</span>
        </span>
      } >
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3"  title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu> */}
                 { this.state.menuTreeNode }
            </Menu>
        </div>
    }
}