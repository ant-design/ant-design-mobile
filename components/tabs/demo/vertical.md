---
order: 5
title:
  zh-CN: 垂直样式
  en-US: 'Vertical'
---

use react-sticky

````jsx
import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
  { title: '1 Tab', key: 't1' },
  { title: '2 Tab', key: 't2' },
  { title: '3 Tab', key: 't3' },
];

const TabExample = () => (
  <div style={{ height: 200 }}>
    <WhiteSpace />
    <Tabs tabs={tabs}
      initialPage={'t2'}
      tabBarPosition="left"
      tabDirection="vertical"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of first tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of second tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
);

ReactDOM.render(<TabExample />, mountNode);
````
