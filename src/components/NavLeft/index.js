import React from 'react'
import { Menu, Icon } from 'antd';
import  menuConfig   from './../../config/menuConfig.js'
import './index.less'
const { SubMenu } = Menu;
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
                    <SubMenu title={<span>{item.title}</span>} key={item.key}>
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
                 { this.state.menuTreeNode }
            </Menu>
        </div>
    }
}