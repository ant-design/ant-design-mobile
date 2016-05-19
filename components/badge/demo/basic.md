---
order: 0
title: 基本
---

简单的徽章展示。


````jsx
import { Badge } from 'antm';
ReactDOM.render(
  <div className="badge-container" style={{ padding: '40px 16px' }}>
    <Badge text={9}>
      <a href="#" className="head-example"></a>
    </Badge>

    <Badge text={'new'}>
      <a href="#" className="head-example"></a>
    </Badge>

  </div>
, mountNode);
````

````css
.head-example {
  width: 52px;
  height: 52px;
  background: rgba(255, 140, 101, 0.15);
  display: inline-block;
}
.am-badge {
  margin-right: 8px;
}
````
