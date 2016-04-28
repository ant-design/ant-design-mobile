---
order: 0
title: 无动画
---

内容区域无动画

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
      <Tabs defaultActiveKey="1" animation={false} onChange={callback}>
        <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
        <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
        <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
      </Tabs>
    );
  }
});

ReactDOM.render(<TabExample />, mountNode);
````
