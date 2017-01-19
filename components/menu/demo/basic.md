---
order: 0
title: 一级菜单
---

````__react
import { Menu } from 'antd-mobile';

const data = [
  {
    label: '中餐',
    value: '21',
  }, {
    label: '未生效',
    value: '22',
    disabled: true,
  }, {
    label: '火锅',
    value: '23',
  }, {
    label: '自助餐',
    value: '24',
  }, {
    label: '快餐',
    value: '25',
  },
];

const MenuExample = React.createClass({
  onChange(value) {
    let label = '';
    data.forEach((el) => {
      if (el.value === value[0]) {
        label = el.label;
      }
    });
    console.log(`选中了 ${label}`);
  },
  render() {
    return <Menu data={data} level={1} onChange={this.onChange} height={Math.round(document.documentElement.clientHeight / 3)} />;
  },
});

ReactDOM.render(<MenuExample />, mountNode);
````
