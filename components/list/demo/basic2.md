---
order: 0
title: 基本
---

单行列表，`line`默认为1。

---

````jsx
import { List } from 'antm';

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
    <List>
      <List.Header>列表头部,无附带说明</List.Header>
      <List.Body>
        <List.Item>文本内容,无剪头</List.Item>
        <List.Item arrow="horizontal">文本内容,有剪头</List.Item>
        <List.Item arrow="up">文本内容,剪头向上</List.Item>
        <List.Item arrow="down">文本内容,剪头向下</List.Item>
      </List.Body>
      <List.Footer>列表尾部</List.Footer>
    </List>
    <List>
    <List.Header>单行组合</List.Header>
      <List.Body>
        <List.Item extra="内容">文本信息</List.Item>
        <List.Item extra="内容" arrow="d">文本信息</List.Item>
        <List.Item extra="内容" arrow="horizontal">文本信息</List.Item>
        <List.Item extra="内容" arrow="up">文本信息,剪头向上</List.Item>
        <List.Item extra="内容" arrow="down">文本信息,剪头向下</List.Item>
      </List.Body>
      <List.Footer>文本说明</List.Footer>
    </List>
  <List isIconList>
    <List.Header>列表头部</List.Header>
    <List.Body>
      <List.Item
        thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        arrow="horizontal"
        onClick={window.openurl}
      >带thumb</List.Item>
      <List.Item
        thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        extra="有箭头位置"
        arrow="aaa"
        onClick={window.clickItem}
      >带thumb</List.Item>
      <List.Item
        icon=""
        extra={<img src="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg" width="29" height="29" />}
        arrow="horizontal"
        onClick={window.clickItem}
      >扩展信息传入图片</List.Item>
    </List.Body>
    <List.Footer>我是表尾</List.Footer>
  </List>
  </div>
, mountNode);
````
