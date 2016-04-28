---
order: 2
title: 加载中...
---

````jsx
import { Toast, Button } from 'antm';

let ToastExample = React.createClass({
  getInitialState() {
    return {
      show: false,
    };
  },
  render() {
    return (
      <div className="toast-container">
        <Button mode="light" size="tiny" inline onClick={() => {
          this.setState({
            show: true,
          });
        }}> 点我-加载中toast </Button>
        {this.state.show ? <Toast mode="loading">加载中...</Toast> : null}
      </div>
    );
  }
});

ReactDOM.render(<ToastExample />, mountNode);
````
