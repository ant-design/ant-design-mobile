---
order: 1
title: 单级菜单
---

````jsx
import { Menu, Toast } from 'antd-mobile';

const data = [
  {
    label: '中餐',
    value: '21',
  }, {
    label: '还没生效',
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
  }, {
    label: '小吃',
    value: '26',
  }, {
    label: '面包甜点',
    value: '27',
  }, {
    label: '生鲜水果',
    value: '28',
  }, {
    label: '面食',
    value: '29',
  }, {
    label: '休闲食品',
    value: '210',
  }, {
    label: '日韩料理',
    value: '211',
  }, {
    label: '咖啡',
    value: '212',
  }, {
    label: '粤菜',
    value: '213',
  },
];

const MenuExample = React.createClass({
  onChange(value) {
    Toast.info(`选中了 ${value.toString()}`);
  },
  render() {
    return <Menu data={data} level={1} onChange={this.onChange} />
  },
});

ReactDOM.render(<MenuExample />, mountNode);
````
