---
order: 0
title: 分段
---

````jsx
import { Tabs, WingBlank } from 'antm';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

let TabExample = React.createClass({
  render() {
    return (
      <WingBlank mode={20}>
        <Tabs defaultActiveKey="1" type="capsule" onChange={callback}>
          <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
          <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
          <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
        </Tabs>
      </WingBlank>
    );
  }
});

ReactDOM.render(<TabExample />, mountNode);
````
