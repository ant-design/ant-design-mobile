# 成功提醒

- order: 1

---

````jsx
import { Toast } from 'antm';


let MessageExample = React.createClass({
  render() {
    return (
      <div className="toast-container">
        <Toast mode="success">成功提醒</Toast>
      </div>
    );
  }
});

ReactDOM.render(<MessageExample />, document.getElementById('components-toast-demo-success'));
````
