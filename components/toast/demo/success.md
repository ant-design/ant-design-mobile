---
order: 4
title: 成功提醒
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
        }}>点我-成功toast </Button>
        {this.state.show ? <Toast mode="success">加载成功</Toast> : null}
      </div>
    );
  }
});

ReactDOM.render(<ToastExample />, mountNode);
````
