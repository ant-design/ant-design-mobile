# 基本

- order: 0

最简单的用法。

---

````jsx
import { List, InputItem} from 'antm';

ReactDOM.render(
  <form>
    <List>
      <List.Header>单行列表</List.Header>
      <List.Body>
        <List.Item
          arrow="horizontal"
          onClick={function(){}}
          needActive={false}
        >文本内容,无Active效果</List.Item>
        <List.Item
          extra="内容内容"
          arrow="down"
          onClick={function(){}}
        >文本信息</List.Item>
        <List.Item
          arrow="up"
          extra="内容内容"
          onClick={function(){}}
        >文本信息</List.Item>
        <List.Item
          extra="内容内容"
          arrow="ss"
          onClick={function(){}}
        >文本内容</List.Item>
        <List.Item
          extra="内容内容"
          onClick={function(){}}
        >文本内容</List.Item>
        <List.Item
          extra="文本内容"
          arrow="horizontal"
          onClick={function(){}}
        >文本信息</List.Item>
      </List.Body>
      <List.Footer onClick={function(e){console.log(e);}} style={{color:'red'}} align="right"><a id="ddd">超链接</a>,改了样式,右对齐,快点我</List.Footer>
    </List>
    <List isIconList={true}>
      <List.Header>带icon</List.Header>
       <List.Body>
        <List.Item
          link="http://www.baidu.com"
          thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
          arrow="horizontal"
          onClick={window.openurl}
        >我有thumb</List.Item>
        <List.Item
          thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
          extra="写点就有剪头坑位"
          arrow="aaa"
          onClick={window.clickItem}
        >我有thumb</List.Item>
        <List.Item
          icon="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
          extra="不写没有剪头坑位"
          onClick={window.clickItem}
        >我有icon</List.Item>
        <List.Item
          icon="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
          extra="向下箭头"
          arrow="down"
          onClick={function(){}}
        >我有icon</List.Item>
        <List.Item
          icon=""
          extra={<img src="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg" width="29" height="29"/>}
          arrow="horizontal"
          onClick={window.clickItem}
        >我是内容22</List.Item>
      </List.Body>
    </List>
    <List>
      <List.Header>form列表</List.Header>
      <List.Body>
        <InputItem
          name="yyy"
          defaultValue="dada22"
          placeholder="dadads"
          clear={true}
          onChange={function(e){console.log('onChange'); console.log(e);}}
          onBlur={function(e){console.log('onBlur'); console.log(e);}}
          onFocus={function(e){console.log('onFocus'); console.log(e);}}
        >我是</InputItem>
        <InputItem
          label=""
          name="yyy"
          defaultValue="dada22"
          placeholder="dadads"
          onChange={function(){}}
        >我是内</InputItem>
        <InputItem
          name="yyy"
          defaultValue="dada22"
          placeholder="dadads"
          clear={true}
          onChange={function(){}}
        />
      </List.Body>
    </List>
  </form>
, document.getElementById('components-list-demo-basic'));
````
