---
order: 0
title: 默认
---

````jsx
import { SegmentedControl, WhiteSpace, WingBlank } from 'antd-mobile';

ReactDOM.render(
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <SegmentedControl values={['切换一', '切换二']} />
    <WhiteSpace size="lg" />
  </WingBlank>,
  mountNode
);
````
