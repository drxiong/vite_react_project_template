import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function AppMenu() {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about">About</Link>
      </Menu.Item>
    </Menu>
  );
}

export default AppMenu;