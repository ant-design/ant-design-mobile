---
order: 1
title: 胶囊型选项卡
---

主要应用在页面的NavBar区块，一般起着控制全局页面内容切换的作用。选项卡的文字内容建议不超过四个。

````jsx
import { Tabs, WhiteSpace } from 'antd-mobile';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

let TabExample = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace />
        <Tabs defaultActiveKey="1" type="capsule" onChange={callback}>
          <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
          <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
          <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
        </Tabs>
        <WhiteSpace />
      </div>
    );
  },
});

ReactDOM.render(<TabExample />, mountNode);
````
