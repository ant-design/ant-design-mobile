---
order: 0
title: 载入中
---



````jsx
import { Toast } from 'antm';


let ToastExample = React.createClass({
  render() {
    return (
      <div className="toast-container">
        <Toast mode="loading"/>
      </div>
    );
  }
});

ReactDOM.render(<ToastExample />, mountNode);
````
