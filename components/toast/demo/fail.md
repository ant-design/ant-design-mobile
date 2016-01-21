# 失败提醒

- order: 2

---

````jsx
import { Toast } from 'antm';


let MessageExample = React.createClass({
  render() {
    return (
      <div className="toast-container">
        <Toast mode="fail">失败提醒</Toast>
      </div>
    );
  }
});

ReactDOM.render(<MessageExample />, document.getElementById('components-toast-demo-fail'));
````
