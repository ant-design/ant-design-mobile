---
order: 2
title: 默认选中 selectedIndex
---

````jsx
import { SegmentedControl, WhiteSpace, WingBlank } from 'antd-mobile';

ReactDOM.render(
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <SegmentedControl selectedIndex={1} values={['切换一', '切换二', '切换三']} />
    <WhiteSpace size="lg" />
  </WingBlank>,
  mountNode
);
````
