# 基本

- order: 0

单行列表，`line`默认为1。

---

````jsx
import { ListWrap, ListHeader, ListFooter, ListBody, ListItem} from 'antm';

window.clickItem = function(e) {
  console.log(e);
  console.log(this);
  console.log(ReactDOM.findDOMNode(this));
  console.log($(ReactDOM.findDOMNode(this)).find('.am-list-extra'));
  $(ReactDOM.findDOMNode(this)).find('.am-list-extra').css('color', 'red');
};
window.openurl = function(e) {
  e.preventDefault();
  let target = e.target;
  if(!$(target).hasClass('am-list-item')) {
    target = $(target).parents('.am-list-item')[0];
  }
  window.location.href = target.href;
};
ReactDOM.render(
  <div>
    <ListWrap>
      <ListHeader>列表头部,没有附带说明</ListHeader>
      <ListBody>
        <ListItem>文本内容,无剪头</ListItem>
        <ListItem arrow="horizontal">文本内容,有剪头</ListItem>
        <ListItem arrow="up">文本内容,剪头向上</ListItem>
        <ListItem arrow="down">文本内容,剪头向下</ListItem>
      </ListBody>
      <ListFooter>列表尾部</ListFooter>
    </ListWrap>
    <ListWrap>
    <ListHeader>单行组合</ListHeader>
      <ListBody>
        <ListItem extra="内容">文本信息</ListItem>
        <ListItem extra="内容" arrow="d">文本信息</ListItem>
        <ListItem extra="内容" arrow="horizontal">文本信息</ListItem>
        <ListItem extra="内容" arrow="up">文本信息,剪头向上</ListItem>
        <ListItem extra="内容" arrow="down">文本信息,剪头向下</ListItem>
      </ListBody>
      <ListFooter>文本说明</ListFooter>
    </ListWrap>
  <ListWrap isIconList={true}>
    <ListHeader>列表头部</ListHeader>
    <ListBody>
      <ListItem
        link="http://www.baidu.com"
        thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        arrow="horizontal"
        onClick={window.openurl}
      >带thumb</ListItem>
      <ListItem
        thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        extra="有箭头位置"
        arrow="aaa"
        onClick={window.clickItem}
      >带thumb</ListItem>
      <ListItem
        icon="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        extra="没有箭头坑位"
        onClick={window.clickItem}
      >带icon</ListItem>
      <ListItem
        icon="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        extra="向下箭头"
        arrow="down"
        onClick={function(){}}
      >带icon</ListItem>
      <ListItem
        icon=""
        extra={<img src="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg" width="29" height="29"/>}
        arrow="horizontal"
        onClick={window.clickItem}
      >扩展信息传入图片</ListItem>
    </ListBody>
    <ListFooter>我是表尾</ListFooter>
  </ListWrap>
  </div>
, document.getElementById('components-list-item-demo-basic'));
````
