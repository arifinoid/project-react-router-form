import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PageMenu extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="home" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/card">
            <Icon type="appstore" />
            Cards
          </Link>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              About
            </span>
          }
        >
          <MenuItemGroup title="About">
            <Menu.Item key="setting:1">
              <Link to="/author">Author</Link>
            </Menu.Item>
            <Menu.Item key="setting:2">
              <Link to="/register">Register</Link>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ant Design
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default PageMenu;
