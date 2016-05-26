---
order: 0
title: 线性型选项卡
---

多用于页面的内容区块，起着控制小范围内的大块内容的分组和隐藏，起着保持界面整洁的作用。

---

````jsx
import { Tabs, WhiteSpace } from 'antm';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

let TabExample = React.createClass({
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
          <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
          <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
});

ReactDOM.render(<TabExample />, mountNode);
````
