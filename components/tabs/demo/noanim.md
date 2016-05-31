---
order: 3
title: 内容区域无动画
---

禁用内容区域的切换动画效果

---

````jsx
import { Tabs, WhiteSpace, Icon } from 'antm';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

let TabExample = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace />
        <Tabs defaultActiveKey="1" animation={false} onChange={callback}>
          <TabPane tab={<span><Icon type="loading" />选项卡一</span>} key="1">选项卡一内容</TabPane>
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
