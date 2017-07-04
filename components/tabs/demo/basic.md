---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic Usage
---

Basic Usage.


````jsx
import { Tabs, WhiteSpace } from 'antd-mobile';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}
const TabExample = () => (
  <div>
    <Tabs defaultActiveKey="2" onChange={callback} onTabClick={handleTabClick}>
      <TabPane tab="First Tab" key="1">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          Content of First Tab
        </div>
      </TabPane>
      <TabPane tab="Second Tab" key="2">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          Content of Second Tab
        </div>
      </TabPane>
      <TabPane tab="Third Tab" key="3">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          Content of Third Tab
        </div>
      </TabPane>
    </Tabs>
    <WhiteSpace />
  </div>
);

ReactDOM.render(<TabExample />, mountNode);
````
