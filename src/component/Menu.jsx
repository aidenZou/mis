import React from 'react';
import {Link} from 'react-router';
import {Menu, Icon, Switch} from 'antd';
const SubMenu = Menu.SubMenu;

const ACTIVE = {color: 'red'};

export default React.createClass({
  getInitialState() {
    return {
      theme: 'dark'
    };
  },
  changeTheme(value) {
    this.setState({
      theme: value ? 'dark' : 'light'
    });
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  },
  render() {
    // <Switch onChange={this.changeTheme} checkedChildren="暗" unCheckedChildren="亮"/>
    return (
      <div>
        <Menu theme={this.state.theme}
              onClick={this.handleClick}
              style={{ width: 240 }}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline">
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
            <Menu.Item key="12"><Link to="/grid" activeStyle={ACTIVE}>表格</Link></Menu.Item>
            <Menu.Item key="22"><Link to="/about" activeStyle={ACTIVE}>关于</Link></Menu.Item>
            <Menu.Item key="32"><Link to="/cascader" activeStyle={ACTIVE}>级联选择</Link></Menu.Item>
            <Menu.Item key="42"><Link to="/users" activeStyle={ACTIVE}>users</Link></Menu.Item>
            <Menu.Item key="52"><Link to="/users/123" activeStyle={ACTIVE}>users/123</Link></Menu.Item>

            <Menu.Item key="6"><Link to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></Menu.Item>
            <Menu.Item key="63"><Link to={{ pathname: '/users/ryan', query: { foo: 'bar' } }} activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></Menu.Item>
            <Menu.Item key="62">选项4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
            <Menu.Item key="5">选项5</Menu.Item>
            <Menu.Item key="6">选项6</Menu.Item>
            <SubMenu key="sub3" title="三级导航">
              <Menu.Item key="7">选项7</Menu.Item>
              <Menu.Item key="8">选项8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
            <Menu.Item key="9">选项9</Menu.Item>
            <Menu.Item key="10">选项10</Menu.Item>
            <Menu.Item key="11">选项11</Menu.Item>
            <Menu.Item key="12">选项12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
});
