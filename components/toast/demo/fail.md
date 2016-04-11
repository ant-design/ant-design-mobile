---
order: 2
title: 失败提醒
---



````jsx
import { Toast } from 'antm';


let ToastExample = React.createClass({
  render() {
    return (
      <div className="toast-container">
        <Toast mode="fail">失败提醒</Toast>
      </div>
    );
  }
});

ReactDOM.render(<ToastExample />, document.getElementById('components-toast-demo-fail'));
````
