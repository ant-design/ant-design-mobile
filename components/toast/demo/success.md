---
order: 1
title: 成功提醒
---



````jsx
import { Toast } from 'antm';


let ToastExample = React.createClass({
  render() {
    return (
      <div className="toast-container">
        <Toast mode="success">成功提醒</Toast>
      </div>
    );
  }
});

ReactDOM.render(<ToastExample />, document.getElementById('components-toast-demo-success'));
````
