---
order: 2
title:
  zh-CN: '超出界面宽度，多于5个标签'
  en-US: 'overflow, more than 5 tabs'
---

There are at most 5 tab panes in the visible area, click on the both sides of `Tabs` to scroll.


````jsx
import { Tabs, WhiteSpace } from 'antd-mobile';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}
const makeTabPane = key => (
  <TabPane tab={`Option${key}`} key={key}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
      {`content of option${key}`}
    </div>
  </TabPane>
);

const makeMultiTabPane = (count) => {
  const result = [];
  for (let i = 0; i <= count; i++) {
    result.push(makeTabPane(i));
  }
  return result;
};

const TabExample = () => (
  <div>
    <Tabs defaultActiveKey="8" onChange={callback} pageSize={5} onTabClick={handleTabClick}>
      {makeMultiTabPane(11)}
    </Tabs>
    <WhiteSpace />
  </div>
);

ReactDOM.render(<TabExample />, mountNode);
````
