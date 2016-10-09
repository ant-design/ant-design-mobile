---
order: 3
title: 主色调样式 tintColor
---

````jsx
import { SegmentedControl, WhiteSpace, WingBlank } from 'antd-mobile';

ReactDOM.render(
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <SegmentedControl
      values={['切换一', '切换二', '切换三']}
      tintColor={'#ff0000'}
      style={{ height: '0.8rem', width: '5rem' }}
    />
    <WhiteSpace size="lg" />
  </WingBlank>,
  mountNode
);
````
