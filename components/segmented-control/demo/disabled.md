---
order: 1
title: 禁用 disabled
---

````jsx
import { SegmentedControl, WhiteSpace, WingBlank } from 'antd-mobile';

ReactDOM.render(
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <SegmentedControl values={['切换一', '切换二']} disabled />
    <WhiteSpace size="lg" />
  </WingBlank>,
  mountNode
);
````
