import React from 'react';
import {DatePicker, message, Icon} from 'antd';
import './App.less';

import Header from '../component/Header';
import Menu from '../component/Menu';
// import Grid from '../component/Grid.jsx';

import Breadcrumb from '../component/Breadcrumb'

let breadcrumbData = [{icon: 'tablet', text: 'Grid'}];

const App = React.createClass({
  render() {
    return <div>
      <Header/>
      <div className="menu-box" style={{}}>
        <Menu></Menu>
      </div>
      <div className="center-box">
        <div>
          <div className="qf-breadcrumb"><Breadcrumb data={breadcrumbData}/></div>
          {this.props.children}
        </div>
      </div>
    </div>;
  }
});

export default App;

