---
order: 0
title: 普通文字
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
        }}> 点我-纯文字 toast </Button>
        {this.state.show ? <Toast>纯文字 toast'</Toast> : null}
      </div>
    );
  }
});

ReactDOM.render(<ToastExample />, mountNode);
````
