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
      <ListHeader>单行列表</ListHeader>
      <ListBody>
        <ListItem
          arrow="up"
          onClick={function(){}}
        >我是额外信息</ListItem>
      </ListBody>
      <ListFooter>文本说明文本说明</ListFooter>
    </ListWrap>
    <ListWrap>
      <ListBody>
        <ListItem
          onClick={function(){}}
        >内容内容</ListItem>
      </ListBody>
      <ListFooter>文本说明文本说明</ListFooter>
    </ListWrap>
    <ListWrap>
    <ListHeader>单行组合</ListHeader>
      <ListBody>
        <ListItem
          extra="内容内容"
          onClick={function(){}}
        >文本信息</ListItem>
        <ListItem
          arrow="horizontal"
          onClick={function(){}}
        >文本内容</ListItem>
        <ListItem
          extra="内容内容"
          arrow="horizontal"
          onClick={function(){}}
        >文本信息</ListItem>
      </ListBody>
      <ListFooter>文本说明文本说明</ListFooter>
    </ListWrap>
  <ListWrap isIconList={true}>
    <ListHeader>我是表头</ListHeader>
    <ListBody>
      <ListItem
        link="http://www.baidu.com"
        thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        arrow="horizontal"
        onClick={window.openurl}
      >我有thumb</ListItem>
      <ListItem
        thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        extra="写点就有剪头坑位"
        arrow="aaa"
        onClick={window.clickItem}
      >我有thumb</ListItem>
      <ListItem
        icon="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        extra="不写没有剪头坑位"
        onClick={window.clickItem}
      >我有icon</ListItem>
      <ListItem
        icon="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        extra="向下箭头"
        arrow="vertical"
        onClick={function(){}}
      >我有icon</ListItem>
      <ListItem
        icon=""
        extra={<img src="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg" width="29" height="29"/>}
        arrow="horizontal"
        onClick={window.clickItem}
      >我是内容22</ListItem>

    </ListBody>
    <ListFooter>我是表尾</ListFooter>
  </ListWrap>
  <ListWrap >
    <ListHeader>我是表头</ListHeader>
    <ListBody>
      <ListItem
        type="双行"
        icon=""
        extra="我是额外信息"
        arrow="vertical"
        onClick={function(){}}
      >我是内容</ListItem>
    </ListBody>
    <ListFooter>我是表尾</ListFooter>
  </ListWrap>
  </div>
, document.getElementById('components-list-item-demo-basic'));
````
