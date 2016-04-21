---
order: 0
title: 基本
---



````jsx
import { Message, WhiteSpace } from 'antm';


let MessageExample = React.createClass({
  render() {
    return (
      <div>
        <Message
          type="success"
          main="国庆期间余额宝收益和转出到账时间"
          sub="驳回原因：内容"
        />
        <WhiteSpace mode={20} />
        <Message
          type="pay"
          main="国庆期间余额宝收益和转出到账时间"
          sub="国庆期间余额宝收益和转出到账时间"
        />
        <WhiteSpace mode={20} />
        <Message
          type="error"
          main="国庆期间余额宝收益和转出到账时间"
          sub="国庆期间余额宝收益和转出到账时间"
        />
        <WhiteSpace mode={20} />
        <Message
          type="warn"
          main="国庆期间余额宝收益和转出到账时间"
          sub="国庆期间余额宝收益和转出到账时间"
        />
        <WhiteSpace mode={20} />
        <Message
          type="info"
          main="国庆期间余额宝收益和转出到账时间"
          sub="驳回原因：内容"
        />
        <WhiteSpace mode={20} />
        <Message
          type="question"
          main="国庆期间余额宝收益和转出到账时间"
          sub="国庆期间余额宝收益和转出到账时间"
        />
        <WhiteSpace mode={20} />
        <Message
          type="wait"
          main="国庆期间余额宝收益和转出到账时间"
          sub="国庆期间余额宝收益和转出到账时间"
        />
      </div>
    );
  }
});

ReactDOM.render(<MessageExample />, mountNode);
````
