# 基本

- order: 0

---

````jsx
import { TopNotice } from 'antm';


let TopNoticeExample = React.createClass({
  render() {
    return (
      <div>
        <TopNotice
          content="国庆期间余额宝收益和转出到账时间"
          mode="close"
          onClick={function(){alert(1111);}}
        />
        <div className="am-whitespace am-whitespace-20"/>
        <TopNotice
          content="国庆期间余额宝收益和转出到账时间"
          mode="operation"
          onClick={function(){alert(22222);}}
        />
        <div className="am-whitespace am-whitespace-20"/>
        <TopNotice
          content="国庆期间余额宝收益和转出到账时间"
          mode="operation"
          operationTxt="点击处理"
          onClick={function(){alert(22222);}}
        />
        <div className="am-whitespace am-whitespace-20"/>
        <TopNotice
          content="国庆期间余额宝收益和转出到账时间国庆期间余额宝收益和转出到账时间"
        />
      </div>
    );
  }
});

ReactDOM.render(<TopNoticeExample />, document.getElementById('components-top-notice-demo-basic'));
````
