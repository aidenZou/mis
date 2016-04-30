import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory} from 'react-router'

import App from './Layout';

import Index from '../page/Index'
import Grid from '../page/Grid'
import About from '../page/About'
import Cascader from '../page/Cascader'  // 级联选择

class Users extends React.Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
        {this.props.children}
      </div>
    )
  }
}

class UsersIndex extends React.Component {
  render() {
    return (
      <div>
        <h3>UsersIndex</h3>
      </div>
    )
  }
}

class User extends React.Component {
  render() {
    return (
      <div>
        <h3>User {this.props.params.id}</h3>
      </div>
    )
  }
}


export default React.createClass({
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Index}/>
          <Route path="/grid" component={Grid}/>
          <Route path="/about" component={About}/>
          <Route path="/cascader" component={Cascader}/>
          <Route path="users" component={Users}>
            <IndexRoute component={UsersIndex}/>
            <Route path=":id" component={User}/>
          </Route>
        </Route>
      </Router>
    );
  }
});
