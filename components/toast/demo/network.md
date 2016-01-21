# 网络无法连接

- order: 3

---

````jsx
import { Toast } from 'antm';


let MessageExample = React.createClass({
  render() {
    return (
      <div className="toast-container">
        <Toast mode="network">网络无法连接</Toast>
      </div>
    );
  }
});

ReactDOM.render(<MessageExample />, document.getElementById('components-toast-demo-network'));
````
