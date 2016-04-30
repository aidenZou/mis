import React from 'react';
import {Link} from 'react-router';

const ACTIVE = {color: '#fff'};

export default React.createClass({
  render() {
    return <header>
      <div><Link to="/" activeStyle={ACTIVE}>MIS 管理中心</Link></div>
    </header>
  }
});
