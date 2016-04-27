---
order: 0
title: 展示
---

Tag

---

````jsx
import { Tag, WhiteSpace } from 'antm';
ReactDOM.render(
  <div className="tag-container">
    <Tag type="action" size="large">大号标签</Tag>
    <WhiteSpace />
    <Tag type="action" size="small">小号标签</Tag>
    <WhiteSpace />
    <Tag type="action" disabled>不可点标签</Tag>
    <WhiteSpace />
    <Tag type="read" size="large">只读标签大</Tag>
    <WhiteSpace />
    <Tag type="read" size="small">只读标签小</Tag>
    <WhiteSpace />
    <Tag type="action" size="large" closable>可关闭标签</Tag>
  </div>
, mountNode);
````
