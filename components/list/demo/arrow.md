---
order: 2
title: 是否带箭头/箭头方向
---

单行列表


````jsx
import { List } from 'antd-mobile';

window.clickItem = (e) => {
  console.log(e);
  console.log(this);
  console.log(ReactDOM.findDOMNode(this));
  console.log($(ReactDOM.findDOMNode(this)).find('.am-list-extra'));
  $(ReactDOM.findDOMNode(this)).find('.am-list-extra').css('color', 'red');
};
window.openurl = (e) => {
  e.preventDefault();
  let target = e.target;
  if (!$(target).hasClass('am-list-item')) {
    target = $(target).parents('.am-list-item')[0];
  }
  window.location.href = target.href;
};
ReactDOM.render(
  <div>
    <List
      renderHeader={() => '箭头方向'}
    >
      <List.Item extra="horizontal,箭头向右" arrow="horizontal" onClick={() => {}}>标题文字</List.Item>
      <List.Item extra="down,箭头向下" arrow="down" onClick={() => {}}>标题文字</List.Item>
      <List.Item extra="up,箭头向上" arrow="up" onClick={() => {}}>标题文字</List.Item>
      <List.Item
        extra={<div>内容内容<List.Item.Brief>辅助文字内容</List.Item.Brief></div>}
        arrow="horizontal"
        onClick={() => {}}
        multipleLine
      >标题文字<List.Item.Brief>辅助文字内容</List.Item.Brief></List.Item>
      <List.Item
        extra={<div>内容内容<List.Item.Brief>辅助文字内容</List.Item.Brief></div>}
        arrow="down"
        onClick={() => {}}
        multipleLine
      >标题文字<List.Item.Brief>辅助文字内容</List.Item.Brief></List.Item>
      <List.Item
        extra={<div>内容内容<List.Item.Brief>辅助文字内容</List.Item.Brief></div>}
        arrow="up"
        error
        onClick={() => {}}
        multipleLine
      >标题文字<List.Item.Brief>辅助文字内容</List.Item.Brief></List.Item>
      <List.Item
        extra="empty,有箭头坑位"
        arrow="empty"
        onClick={() => {}}
        multipleLine
      >内容内容</List.Item>
      <List.Item
        extra="校验报错"
        error
        onClick={() => {}}
      >内容内容</List.Item>
    </List>
  </div>
, mountNode);
````
