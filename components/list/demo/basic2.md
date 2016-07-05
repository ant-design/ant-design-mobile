---
order: 1
title: 箭头
---

单行列表


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
      <List.Header>箭头</List.Header>
      <List.Body>
        <List.Item extra="horizontal,箭头向右" arrow="horizontal">标题文字</List.Item>
        <List.Item extra="down,箭头向下" arrow="down">标题文字</List.Item>
        <List.Item extra="up,箭头向上" arrow="up">标题文字</List.Item>
        <List.Item
          extra={<div>内容内容<div className="am-list-brief">辅助文字内容</div></div>}
          arrow="horizontal"
        ><div className="am-list-title">标题文字</div><div className="am-list-brief">辅助文字内容</div></List.Item>
        <List.Item
          extra={<div>内容内容<div className="am-list-brief">辅助文字内容</div></div>}
          arrow="down"
        ><div className="am-list-title">标题文字</div><div className="am-list-brief">辅助文字内容</div></List.Item>
        <List.Item
          extra={<div>内容内容<div className="am-list-brief">辅助文字内容</div></div>}
          arrow="up"
          error
        ><div className="am-list-title">标题文字</div><div className="am-list-brief">辅助文字内容</div></List.Item>
        <List.Item
          extra="empty,有箭头坑位"
          arrow="empty"
        >内容内容</List.Item>
        <List.Item
          extra="校验报错"
          error
        >内容内容</List.Item>
      </List.Body>
    </List>
  </div>
, mountNode);
````
