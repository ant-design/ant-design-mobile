---
order: 3
title: 自定义颜色
---

text & line 颜色自定义

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
        <Tabs defaultActiveKey="1"
          underlineColor="blue"
          activeUnderlineColor="red"
          textColor="yellow"
          activeTextColor="green"
          onChange={callback}
        >
          <TabPane tab="选项卡一" key="1">
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
            }}>
               选项卡一内容
            </div>
          </TabPane>
          <TabPane tab="选项卡二" key="2">
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
            }}>
               选项卡二内容
            </div>
          </TabPane>
          <TabPane tab="选项卡三" key="3">
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
            }}>
               选项卡三内容
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
      </div>
    );
  },
});

ReactDOM.render(<TabExample />, mountNode);
````
