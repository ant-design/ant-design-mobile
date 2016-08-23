---
order: 1
title: 讨嫌的小红点
---

只有个讨嫌的小红点，没有具体数字


````jsx
import { Badge } from 'antd-mobile';

ReactDOM.render(
  <div className="badge-container" style={{ padding: '40px 16px' }}>
    <Badge dot>
      <span className="dot-example"></span>
    </Badge>
  </div>
, mountNode);
````

````css
.dot-example {
  width: 0.56rem;
  height: 0.56rem;
  background: rgba(255, 140, 101, 0.15);
  display: inline-block;
}
.am-badge {
  margin-right: 8px;
}
````
