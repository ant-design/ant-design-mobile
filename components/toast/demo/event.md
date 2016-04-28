---
order: 5
title: 隐藏事件
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
        }}> 点我显示toast </Button>
        {this.state.show ? <Toast mode="success" afterClose={() => {
          alert('hided!!!');
        }}>加载中...</Toast> : null}
      </div>
    );
  }
});

ReactDOM.render(<ToastExample />, mountNode);
````
