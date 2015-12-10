# 基本

- order: 0

最简单的用法。

---

````jsx
import { ListWrap, ListHeader, ListFooter, ListBody, ListItem} from 'antm';

window.clickItem = function(e) {
  console.log(e);
  console.log(this);
  this.setState({
    extra:'434234'
  });
  this.setState({
    extraFormData:{
      'pic1':'5555'
    }
  });
  console.log(ReactDOM.findDOMNode(this));
  console.log($(ReactDOM.findDOMNode(this)).find('.am-list-extra'));
  $(ReactDOM.findDOMNode(this)).find('.am-list-extra').css('color', 'red');
};
window.didMount = function() {
  console.log(this);
};
window.openurl = function(e) {
  console.log(e);
  window.location.href = e.target.href;
};
ReactDOM.render(
  <div>
  <ListWrap >
    <ListHeader label="我是表头"/>
    <ListBody>
      <ListItem
        type="双行"
        link="http://www.baidu.com"
        icon="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        content="我是内容"
        arrow="horizontal"
        onClick={window.openurl}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <ListItem
        type="双行"
        icon=""
        content="我是内容22"
        extra={<img src="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg" width="29" height="29"/>}
        arrow="horizontal"
        didMount={window.didMount}
        onClick={window.clickItem}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <ListItem
        type="双行"
        icon=""
        content="我是内容22"
        extra="写点就有剪头坑位"
        arrow="aaa"
        onClick={window.clickItem}
      />
      <ListItem
        type="双行"
        icon=""
        content="我是内容22"
        extra="不写没有剪头坑位"
        onClick={window.clickItem}
      />
      <ListItem
        type="双行"
        icon=""
        content="我是内容"
        extra="向下箭头"
        arrow="vertical"
        onClick={function(){}}
      />
    </ListBody>
    <ListFooter>我是表尾</ListFooter>
  </ListWrap>
  <ListWrap >
      <ListHeader label="我是表头"/>
      <ListBody>
        <ListItem
          type="双行"
          icon=""
          content="我是内容"
          extra="我是额外信息"
          arrow="vertical"
          onClick={function(){}}
        />
      </ListBody>
      <ListFooter>我是表尾</ListFooter>
    </ListWrap>
  </div>
, document.getElementById('components-list-item-demo-basic'));
````
