---
order: 1
title: 失败
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
        }}> 点我-失败toast </Button>
        {this.state.show ? <Toast mode="fail">加载失败</Toast> : null}
      </div>
    );
  }
});

ReactDOM.render(<ToastExample />, mountNode);
````
