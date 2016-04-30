import React, {Component} from 'react'
import {render} from 'react-dom'
import {Breadcrumb, Icon} from 'antd';

// 面包屑
// const Breadcrumb = React.createClass({
// class Breadcrumb extends React.Component {

export default class extends React.Component {
  render() {
    return <Breadcrumb>
      <Breadcrumb.Item href="">
        <Icon type="home"/>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        <Icon type="user"/>
        应用列表
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Icon type={this.props.data[0].icon}/>
        {this.props.data[0].text}
      </Breadcrumb.Item>
    </Breadcrumb>
  }
}
// export default Breadcrumb;
