---
order: 3
title: 网络无法连接
---



````jsx
import { Toast } from 'antm';


let ToastExample = React.createClass({
  render() {
    return (
      <div className="toast-container">
        <Toast mode="network">网络无法连接</Toast>
      </div>
    );
  }
});

ReactDOM.render(<ToastExample />, document.getElementById('components-toast-demo-network'));
````
