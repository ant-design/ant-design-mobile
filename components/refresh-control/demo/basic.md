---
order: 0
title: 基本
---

下拉刷新


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
  loadingFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.addItem()) {
          resolve();
        } else {
          reject();
        }
      }, 2500);
    });
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
      <RefreshControl
        loadingFunction={this.loadingFunction}
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
