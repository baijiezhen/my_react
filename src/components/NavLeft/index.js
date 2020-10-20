import React from 'react'
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import menuConfig from './../../config/menuConfig.js'
import { connect } from 'react-redux'
import { switchMenu } from './../../redux/action'
import './index.less'
const { SubMenu } = Menu;
 class NavLeft extends React.Component{
    state = {
        currentKey: ''
    }
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
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    // 菜单点击
    handleClick = ({ item, key }) => {
        if (key == this.state.currentKey) {
            return false;
        }
        // 事件派发，自动调用reducer，通过reducer保存到store对象中
        const { dispatch } = this.props;
        
        dispatch(switchMenu(item.props.title));

        this.setState({
            currentKey: key
        });
        // hashHistory.push(key);
    };
    render(){
        return <div>
            <div className="logo">
                        <img src="/assets/logo-ant.svg" alt=""/>
                        <h1>Imooc MS</h1>
            </div>
            <Menu theme="dark" mode="vertical" onClick={this.handleClick}>
                 { this.state.menuTreeNode }
            </Menu>
        </div>
    }
}
export default connect()(NavLeft)