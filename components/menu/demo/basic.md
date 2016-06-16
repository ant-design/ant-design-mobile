---
order: 0
title: 二级菜单
---



````jsx
import { Menu, Toast } from 'antm';

let data1 = [
  {
    value: '1',
    label: '全部分类',
    isLeaf: true
  }, {
    value: '2',
    label: '美食',
    children: [
      {
        label: '中餐',
        value: '21'
      }, {
        label: '全部美食',
        value: '22',
        disabled: true
      }, {
        label: '火锅',
        value: '23'
      }, {
        label: '自助餐',
        value: '24'
      }, {
        label: '快餐',
        value: '25'
      }, {
        label: '小吃',
        value: '26'
      }, {
        label: '面包甜点',
        value: '27'
      }, {
        label: '生鲜水果',
        value: '28'
      }, {
        label: '面食',
        value: '29'
      }, {
        label: '休闲食品',
        value: '210'
      }, {
        label: '日韩料理',
        value: '211'
      }, {
        label: '咖啡',
        value: '212'
      }, {
        label: '粤菜',
        value: '213'
      }]
  }, {
    value: '3',
    label: '超市',
    children: [
      {
        label: '全部超市',
        value: '31'
      }, {
        label: '超市',
        value: '32',
        disabled: true
      }, {
        label: '便利店',
        value: '33'
      }, {
        label: '个人护理',
        value: '34'
      }]
  }, {
    value: '4',
    label: '丽人',
    children: [
      {
        label: '全部丽人',
        value: '41'
      }, {
        label: '美发',
        value: '42',
        disabled: true
      }, {
        label: '美容',
        value: '43'
      }, {
        label: '美甲',
        value: '44'
      }]
  }, {
    value: '5',
    label: '休闲娱乐',
    children: [
      {
        label: '全部休闲娱乐',
        value: '51'
      }, {
        label: '咖啡',
        value: '52',
        disabled: true
      }, {
        label: '酒吧',
        value: '53'
      }, {
        label: '足疗养生洗浴',
        value: '54'
      }, {
        label: '保健/休闲养生',
        value: '55'
      }, {
        label: '棋牌休闲',
        value: '56'
      }, {
        label: 'KTV及其它',
        value: '57'
      }]
  }
];

let MenuExample1 = React.createClass({
  getInitialState() {
    return {
      visiable: true,
      value: ['4', '41']
    };
  },
  onChange(value) {
    Toast.info(`选中了 ${value.toString()}`);
    this.setState({
      visiable: false
    });
    setTimeout(() => {
      this.setState({
        visiable: true,
        value: ['2', '23']
      });
    }, 500);
  },
  render() {
    return (<div>
      {this.state.visiable ? (<Menu
        onChange={this.onChange}
        value={this.state.value}
        data={data1}
      />) : null}
    </div>);
  }
});


ReactDOM.render(<MenuExample1 />, mountNode);
````
