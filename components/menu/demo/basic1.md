---
order: 1
title: 二级菜单
---

````jsx
import { Menu } from 'antd-mobile';

const data = [
  {
    value: '1',
    label: '全部分类',
    isLeaf: true,
  }, {
    value: '2',
    label: '美食',
    children: [
      {
        label: '全部美食',
        value: '22',
        disabled: true,
      },
      {
        label: '中餐',
        value: '21',
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
      }],
  }, {
    value: '3',
    label: '超市',
    children: [
      {
        label: '全部超市',
        value: '31',
      }, {
        label: '超市',
        value: '32',
        disabled: true,
      }, {
        label: '便利店',
        value: '33',
      }, {
        label: '个人护理',
        value: '34',
      }],
  },
];

const MenuExample = React.createClass({
  getInitialState() {
    return {
      initData: '',
    };
  },
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        initData: data,
      });
    }, 1000);
  },
  onChange(value) {
    let label = '';
    data.forEach(dataItem => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach(cItem => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });
    console.log(label);
  },
  render() {
    return this.state.initData ? <Menu data={data} value={['2', '22']} onChange={this.onChange} />
      : <div>loading...</div>;
  },
});

ReactDOM.render(<MenuExample />, mountNode);
````
