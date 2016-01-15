# 基本

- order: 0

---

````jsx
import { Message } from 'antm';


let MessageExample = React.createClass({
  render() {
    return (
      <div>
        <Message
          type="success"
          main="国庆期间余额宝收益和转出到账时间"
          sub="驳回原因：内容"
        />
        <div className="am-whitespace am-whitespace-20"/>
        <Message
          type="pay"
          main="国庆期间余额宝收益和转出到账时间"
          sub="国庆期间余额宝收益和转出到账时间"
        />
        <div className="am-whitespace am-whitespace-20"/>
        <Message
          type="error"
          main="国庆期间余额宝收益和转出到账时间"
          sub="国庆期间余额宝收益和转出到账时间"
        />
        <div className="am-whitespace am-whitespace-20"/>
        <Message
          type="warn"
          main="国庆期间余额宝收益和转出到账时间"
          sub="国庆期间余额宝收益和转出到账时间"
        />
        <div className="am-whitespace am-whitespace-20"/>
        <Message
          type="info"
          main="国庆期间余额宝收益和转出到账时间"
          sub="驳回原因：内容"
        />
        <div className="am-whitespace am-whitespace-20"/>
        <Message
          type="question"
          main="国庆期间余额宝收益和转出到账时间"
          sub="国庆期间余额宝收益和转出到账时间"
        />
        <div className="am-whitespace am-whitespace-20"/>
        <Message
          type="wait"
          main="国庆期间余额宝收益和转出到账时间"
          sub="国庆期间余额宝收益和转出到账时间"
        />
      </div>
    );
  }
});

ReactDOM.render(<MessageExample />, document.getElementById('components-message-demo-basic'));
````
