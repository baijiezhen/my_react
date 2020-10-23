import React from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import menuConfig from "./../../config/menuConfig.js";
import { connect } from "react-redux";
import { switchMenu } from "./../../redux/action";
import PropTypes from "prop-types";
import { createFromIconfontCN } from "@ant-design/icons";
import "./index.less";
const { SubMenu } = Menu;
const MyIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1338425_4tmamc43g4w.js", // 在 iconfont.cn 上生成
});
class NavLeft extends React.Component {
  state = {
    currentKey: "",
  };
  componentWillMount() {
    // let paramsHis = this.context.router.history.location.pathname;
    const menuTreeNode = this.renderMenu(menuConfig);
    this.setState({
      menuTreeNode,
    });
  }
  //  菜单渲染
  renderMenu = (data) => {
    console.log(this);
    const { dispatch } = this.props;
    console.log(dispatch, this);
    return data.map((item) => {
      console.log(item);
      if (item.key == this.context.router.history.location.pathname) {
        this.setState({
          currentKey: item.key,
        });
        dispatch(switchMenu(item.title));
      }
      if (item.children) {
        return (
          <SubMenu
            title={<span>{item.title}</span>}
            key={item.key}
            icon={item.icon ? <MyIcon type={item.icon} /> : ""}
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item
          title={item.title}
          key={item.key}
          icon={item.icon ? <MyIcon type={item.icon} /> : ""}
        >
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };
  // 菜单点击
  handleClick = ({ item, key }) => {
    if (key == this.state.currentKey) {
      return false;
    }
    // 事件派发，自动调用reducer，通过reducer保存到store对象中
    const { dispatch } = this.props;

    dispatch(switchMenu(item.props.title));

    this.setState({
      currentKey: key,
    });
    // hashHistory.push(key);
  };
  render() {
    return (
      <div className="nav-box">
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          onClick={this.handleClick}
          id="menu-box"
          selectedKeys={[this.state.currentKey]}
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

NavLeft.contextTypes = {
  router: PropTypes.object.isRequired,
};
export default connect()(NavLeft);
// export default NavLeft;
