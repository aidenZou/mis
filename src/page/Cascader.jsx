import React, {Component} from 'react'
import {render} from 'react-dom'
import {Cascader} from 'antd';

const options = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖'
    }]
  }]
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门'
    }]
  }]
}, {
  value: 'shanxi',
  label: '陕西',
  children: [{
    value: 'xian',
    label: '西安',
    children: [{
      value: 'xxx',
      label: 'xxx'
    }]
  }, {
    value: 'hanzhong',
    label: '汉中',
    children: [{
      value: 'yyy',
      label: 'yyy'
    }]
  }]
}];

function onChange(value) {
  console.log(value);
}

// 只展示最后一项
function displayRender(label) {
  return label[label.length - 1];
}
export default class extends React.Component {
  render() {
    return (
      <Cascader options={options} expandTrigger="hover"
                displayRender={displayRender} onChange={onChange}/>
    )
  }
}
