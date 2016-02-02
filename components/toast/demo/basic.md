# 失败提醒

- order: 4

---

````jsx
import { Toast } from 'antm';


let ToastExample = React.createClass({
  render() {
    return (
      <div className="toast-container">
        <Toast>咬我啊</Toast>
      </div>
    );
  }
});

ReactDOM.render(<ToastExample />, document.getElementById('components-toast-demo-basic'));
````
