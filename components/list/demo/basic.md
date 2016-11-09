---
order: 0
title: 示例
---


````jsx
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

const ListExample = React.createClass({
  render() {
    return (
      <List
        renderHeader={() => '我是华丽丽的列表头部'}
        renderFooter={() => '我是列表尾部'}
      >
        <Item data-seed="logId">标题文字点击无反馈，文字超长则隐藏</Item>
        <Item wrap>文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行</Item>

        <Item thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" arrow="horizontal">我的钱包</Item>
        <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png">我的花销占比</Item>

        <Item extra="没有箭头">内容内容</Item>
        <Item extra="箭头向右" arrow="horizontal">标题文字</Item>
        <Item extra="箭头向下" arrow="down">标题文字</Item>
        <Item extra="箭头向上" arrow="up">标题文字</Item>

        <Item extra={<div>内容内容<Brief>辅助文字内容</Brief></div>} multipleLine>垂直居中对齐</Item>
        <Item extra={<div>内容内容<Brief>辅助文字内容</Brief></div>} multipleLine align="top">顶部对齐</Item>
        <Item extra="内容内容" multipleLine>
          垂直居中对齐 <Brief>辅助文字内容</Brief>
        </Item>
        <Item extra="内容内容" multipleLine align="top" arrow="horizontal">
          <div>顶部对齐<Brief>辅助文字内容</Brief></div>
        </Item>

        <Item>
          <select defaultValue="1">
            <option value="1">这是原生 html select</option>
            <option value="2" disabled>不可选</option>
            <option value="3">选项3</option>
          </select>
        </Item>
      </List>
    );
  },
});

ReactDOM.render(<ListExample />, mountNode);
````
