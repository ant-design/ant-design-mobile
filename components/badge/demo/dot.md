---
order: 1
title: 小红点
---

只有个小红点，没有具体数字


````jsx
import { Badge } from 'antd-mobile';

ReactDOM.render(
  <div className="badge-container" style={{ padding: '40px 16px' }}>
    <Badge dot>
      <span className="dot-example" />
    </Badge>
  </div>
, mountNode);
````

````css
.dot-example {
  width: 0.56rem;
  height: 0.56rem;
  background: #ddd;
  display: inline-block;
}
````
