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
      refreshing: false,
    };
  },
  onRefresh() {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.addItem();
      this.setState({ refreshing: false });
    }, 1000);
  },
  addItem() {
    const newItems = this.state.items ? [...this.state.items] : [];
    newItems.unshift(
      <List.Item key={`item-${count}`} extra="horizontal,箭头向右" arrow="horizontal">标题文字 {count++}</List.Item>
    );
    this.setState({
      items: newItems,
    });
  },
  render() {
    return (
      <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
        resistance={1}
        className="am-refresh-control-demo1"
        style={{
          height: 600,
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
