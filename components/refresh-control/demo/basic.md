---
order: 0
title: 基本
---

下拉刷新

---

````jsx
import { RefreshControl } from 'antm';

let count = 1;
const App = React.createClass({
  getInitialState() {
    return {
      items: [
        <div key={`item-${count}`}>条目 {count++}</div>
      ]
    };
  },
  handleRefresh(resolve, reject) {
    setTimeout(() => (this.addItem() ? resolve() : reject()), 1000);
  },
  addItem() {
    this.state.items.push(<div key={`item-${count}`}>条目 {count++}</div>);
    this.setState({
      items: this.state.items
    });
    return true;
  },
  render() {
    return (
      <RefreshControl onRefresh={this.handleRefresh}
        distanceToRefresh={40}
        resistance={1}
        style={{
          position: 'relative',
          paddingTop: 20,
          textAlign: 'center'
        }}
      >
        <h3>下拉刷新</h3>
        <div style={{ minHeight: 100 }}>
          {this.state.items}
        </div>
      </RefreshControl>
    );
  }
});

ReactDOM.render(<App />, mountNode);
````
