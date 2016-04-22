---
order: 0
title: 基本
---



````jsx
import { TopNotice, WhiteSpace } from 'antm';


let TopNoticeExample = React.createClass({
  getInitialState() {
    return {
      show: true
    };
  },
  render() {
    const TopNotice1 = this.state.show ? (<TopNotice
      mode="close"
      onClick={() => {this.setState({ show: false });}}
    >国庆期间余额宝收益和转出到账时间</TopNotice>) : null;
    return (
      <div>
        {TopNotice1}
        <WhiteSpace mode={20} />
        <TopNotice
          mode="operation"
          onClick={() => {this.setState({ show: true });}}
        >国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20} />
        <TopNotice
          mode="operation"
          operationTxt="点击处理"
          onClick={() => {alert(22222);}}
        >国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20} />
        <TopNotice>国庆期间余额宝收益和转出到账时间</TopNotice>
      </div>
    );
  }
});

ReactDOM.render(<TopNoticeExample />, mountNode);
````
