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
        distanceToRefresh={60}
        resistance={1}
        style={{
          position: 'relative',
          paddingTop: 20,
          textAlign: 'center',
        }}
        contentStyle={{
          height: '100%',
        }}
        hammerOptions={{
          touchAction: 'auto',
          recognizers: {
            pan: {
              threshold: 10,
            },
          },
        }}
      >
        <List title="下拉刷新">
          <List.Body>
            {this.state.items}
            <List.Item extra="horizontal,箭头向右" arrow="horizontal">标题文字</List.Item>
            <List.Item extra="down,箭头向下" arrow="down">标题文字</List.Item>
            <List.Item extra="up,箭头向上" arrow="up">标题文字</List.Item>
          </List.Body>
        </List>
      </RefreshControl>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````

<style>
.demo {
  display: flex;
  flex-direction:column;
}
.demo-preview-item {
  display: flex;
  flex-direction:column;
  flex: 1;
}
.am-refresh-control {
  flex:1;
}
</style>
