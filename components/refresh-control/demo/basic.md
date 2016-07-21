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
        <div key={`item-${count}`} style={{ height: 70 }}>条目 {count++}</div>,
      ],
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
    this.state.items.push(<div key={`item-${count}`} style={{ height: 70 }}>条目 {count++}</div>);
    this.setState({
      items: this.state.items,
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
        hammerOptions={{
          touchAction: 'auto',
          recognizers: {
            pan: {
              threshold: 100,
            },
          },
        }}
      >
        <h3>下拉刷新</h3>
        <div style={{ minHeight: 300 }}>
          {this.state.items}
        </div>
      </RefreshControl>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````
