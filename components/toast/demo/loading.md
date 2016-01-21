# 载入中

- order: 0

---

````jsx
import { Toast } from 'antm';


let MessageExample = React.createClass({
  render() {
    return (
      <div className="toast-container">
        <Toast/>
      </div>
    );
  }
});

ReactDOM.render(<MessageExample />, document.getElementById('components-toast-demo-loading'));
````
