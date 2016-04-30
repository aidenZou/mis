import React from 'react';
import {Link} from 'react-router';
import {Menu, Icon, Switch} from 'antd';
const SubMenu = Menu.SubMenu;

import menuData from './data';

const ACTIVE = {color: 'red'};

export default React.createClass({
  getInitialState() {
    return {
      theme: 'dark'
    };
  },
  changeTheme(value) {
    this.setState({
      // theme: value ? 'dark' : 'light'
      theme: !value ? 'dark' : 'light'
    });
  },
  handleClick(e) {
    // console.log('click ', e);
    this.setState({
      current: e.key
    });
  },
  // <Switch onChange={this.changeTheme} checkedChildren="暗" unCheckedChildren="亮"/>

  // <Link to={{ pathname: '/users/ryan', query: { foo: 'bar' } }} activeStyle={ACTIVE}>/users/ryan?foo=bar</Link>

  render() {
    let menuList = menuData.map((menu, index) => {

      let menus = menu.list.map((_menu, _index) => {
        let link = _menu.link ? <Link to={_menu.link} activeStyle={ACTIVE}>{_menu.text}</Link> : _menu.text;
        return (
          <Menu.Item key={index + '_' + _index}>{link}</Menu.Item>
        )
      });

      return (
        <SubMenu key={index} title={<span><Icon type={menu.icon} /><span>{menu.text}</span></span>}>
          {menus}
        </SubMenu>
      );
    });

    return (
      <div>
        <Menu theme={this.state.theme}
              onClick={this.handleClick}
              style={{ width: 240 }}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline">
          {menuList}
        </Menu>
      </div>
    );
  }
});
