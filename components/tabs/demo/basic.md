---
order: 0
title: 基本
---

````jsx
import { Tabs } from 'antm';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

let TabExample = React.createClass({
  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
        <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
        <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
      </Tabs>
    );
  }
});

ReactDOM.render(<TabExample />, mountNode);
````
