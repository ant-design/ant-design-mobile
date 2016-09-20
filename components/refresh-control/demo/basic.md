---
order: 0
title: 基本
---

下拉刷新


````jsx
import { RefreshControl, List } from 'antd-mobile';

let count = 1;
const App = React.createClass({
  getInitialState() {
    return {
      items: null,
    };
  },
  loadingFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.addItem()) {
          resolve();
        } else {
          reject();
        }
      }, 500);
    });
  },
  addItem() {
    const newItems = this.state.items ? [...this.state.items] : [];
    newItems.unshift(
      <List.Item key={`item-${count}`} extra="horizontal,箭头向右" arrow="horizontal">标题文字 {count++}</List.Item>
    );
    this.setState({
      items: newItems,
    });
    return true;
  },
  render() {
    return (
      <RefreshControl
        loadingFunction={this.loadingFunction}
        resistance={1}
        className="am-refresh-control-demo1"
        style={{
          textAlign: 'center',
        }}
      >
        <List renderHeader={() => '下拉刷新'}>
          {this.state.items}
          <List.Item extra="horizontal,箭头向右" arrow="horizontal">标题文字</List.Item>
          <List.Item extra="down,箭头向下" arrow="down">标题文字</List.Item>
          <List.Item extra="up,箭头向上" arrow="up">标题文字</List.Item>
        </List>
      </RefreshControl>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````

```css
.demo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
}
.demo-preview-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}
.am-refresh-control-demo1 {
  -webkit-box-flex:1;
      -ms-flex:1;
          flex:1;
}
```
