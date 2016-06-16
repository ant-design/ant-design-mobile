---
order: 0
title: 基本
---

最简单的用法。

````jsx
import { List } from 'antm';

const ListForm = React.createClass({
  onClick() {
    console.log('onClick');
  },

  render() {
    return (<form>
      <List>
        <List.Header>列表头部,List.Header</List.Header>
        <List.Body>
          <List.Item
            onClick={this.onClick}
            needActive={false}
          >标题文字,无Active效果</List.Item>
          <List.Item
            onClick={this.onClick}
          >标题文字默认有Active效果</List.Item>
          <List.Item
            extra="内容内容"
            onClick={this.onClick}
          >标题文字</List.Item>
        </List.Body>
        <List.Footer>列表尾部,List.Footer</List.Footer>
      </List>
      <List>
        <List.Header>icon</List.Header>
         <List.Body>
          <List.Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
            onClick={window.openurl}
          >icon</List.Item>
          <List.Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            onClick={window.clickItem}
          >icon</List.Item>
          <List.Item
            icon=""
            extra={<img src="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" width="28" height="28" />}
            arrow="horizontal"
            onClick={window.clickItem}
          >扩展信息传入icon</List.Item>
        </List.Body>
      </List>
    </form>);
  },
});

ReactDOM.render(<ListForm />, mountNode);
````
