---
order: 2
title:
  zh-CN: '超出界面宽度，多于5个标签'
  en-US: 'overflow, more than 5 tabs'
---

可视区最多显示5个标签，点击两侧的标签后，滑动tabs


````jsx
import { Tabs, WhiteSpace } from 'antd-mobile';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const makeTabPane = key => (
  <TabPane tab={`选项${key}`} key={key}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
      {`选项${key}内容`}
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
    <Tabs defaultActiveKey="8" onChange={callback}>
      {makeMultiTabPane(11)}
    </Tabs>
    <WhiteSpace />
  </div>
);

ReactDOM.render(<TabExample />, mountNode);
````
