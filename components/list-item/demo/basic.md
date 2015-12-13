# 基本

- order: 0

单行列表，`line`默认为1。

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
      <ListHeader label="单行列表"/>
      <ListBody>
        <ListItem
          content="文本内容"
          extra="我是额外信息"
          arrow="up"
          onClick={function(){}}
        />
      </ListBody>
      <ListFooter>文本说明文本说明</ListFooter>
    </ListWrap>
    <ListWrap>
      <ListBody>
        <ListItem
          content="文本信息"
          extra="内容内容"
          onClick={function(){}}
        />
      </ListBody>
      <ListFooter>文本说明文本说明</ListFooter>
    </ListWrap>
    <ListWrap>
    <ListHeader label="单行组合"/>
      <ListBody>
        <ListItem
          content="文本信息"
          extra="内容内容"
          onClick={function(){}}
        />
        <ListItem
          content="文本内容"
          arrow="horizontal"
          onClick={function(){}}
        />
        <ListItem
          content="文本信息"
          extra="内容内容"
          arrow="horizontal"
          onClick={function(){}}
        />
      </ListBody>
      <ListFooter>文本说明文本说明</ListFooter>
    </ListWrap>
  <ListWrap isIconList={true}>
    <ListHeader label="我是表头"/>
    <ListBody>
      <ListItem
        link="http://www.baidu.com"
        thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        content="我有thumb"
        arrow="horizontal"
        onClick={window.openurl}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
      />
      <ListItem
        thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        content="我有thumb"
        extra="写点就有剪头坑位"
        arrow="aaa"
        onClick={window.clickItem}
      />
      <ListItem
        icon="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        content="我有icon"
        extra="不写没有剪头坑位"
        onClick={window.clickItem}
      />
      <ListItem
        icon="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
        content="我有icon"
        extra="向下箭头"
        arrow="vertical"
        onClick={function(){}}
      />
      <ListItem
        icon=""
        content="我是内容22"
        extra={<img src="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg" width="29" height="29"/>}
        arrow="horizontal"
        didMount={window.didMount}
        onClick={window.clickItem}
        extraFormData={{'pic1':'22', 'pic2':'222'}}
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
