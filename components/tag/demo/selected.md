---
order: 3
title: 标签选中项
---

添加 selected 属性即可让标签处于被选中状态。

````jsx
import { Tag, WingBlank, WhiteSpace } from 'antm';

ReactDOM.render(
  <div className="tag-container">
    <WhiteSpace />
    <WingBlank mode={20}>
      <Tag type="action" size="large" selected>大号标签默认选中</Tag>
      <WhiteSpace />
      <Tag type="action" size="small" selected>小号标签默认选中</Tag>
      <WhiteSpace />
    </WingBlank>
    <WhiteSpace />
  </div>
, mountNode);
````
