let menuData = [{
  icon: 'mail',
  text: '导航一',
  list: [{
    icon: '',
    text: '表格',
    link: '/grid',
    list: []
  }, {
    icon: '',
    text: '级联选择',
    link: '/cascader',
    list: []
  }, {
    icon: '',
    text: 'users',
    link: '/users',
    list: []
  }, {
    icon: '',
    text: '/users/ryan',
    link: '/users/ryan',
    list: []
  }, {
    icon: '',
    text: '/users/ryan?foo=bar',
    list: []
  }, {
    icon: '',
    text: '关于',
    link: '/about',
    list: []
  }]
}, {
  icon: 'appstore',
  text: '导航二',
  list: [{
    icon: '',
    text: '选项5',
    list: []
  }, {
    icon: '',
    text: '选项6',
    list: []
  }, {
    icon: '',
    text: '三级导航',
    list: [, {
      icon: '',
      text: '选项7',
      list: []
    }, {
      icon: '',
      text: '选项8',
      list: []
    }]
  }]
}, {
  icon: 'setting',
  text: '导航三',
  list: [{
    icon: '',
    text: '选项9',
    list: []
  }, {
    icon: '',
    text: '选项10',
    list: []
  }, {
    icon: '',
    text: '选项11',
    list: []
  }, {
    icon: '',
    text: '选项12',
    list: []
  }]
}];

export default menuData;
