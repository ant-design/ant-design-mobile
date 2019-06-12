---
order: 3
title:
  zh-CN: 固定高度
  en-US: 'Fixed height'
---

固定外部容器高度

````jsx
import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
  { title: 'First Tab', key: 't1' },
  { title: 'Second Tab', key: 't2' },
  { title: 'Third Tab', key: 't3' },
];

const TabExample = () => (
  <div>
    <WhiteSpace />
    <div style={{ height: 200 }}>
      <Tabs tabs={tabs}
        initialPage={'t2'}
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
    </div>
  </div>
);

ReactDOM.render(<TabExample />, mountNode);
````
