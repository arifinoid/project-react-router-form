import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
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
        <Menu.Item key="register">
          <Link to="/register">
            <Icon type="mail" />
            Register
          </Link>
        </Menu.Item>
        <Menu.Item key="notfound">
          <Link to="/notfound">
            <Icon type="warning" />
            Don't click this
          </Link>
        </Menu.Item>
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
