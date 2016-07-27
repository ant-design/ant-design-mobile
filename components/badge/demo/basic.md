---
order: 0
title: 基本
---

简单的徽章展示。


````jsx
import { Badge } from 'antd-mobile';
ReactDOM.render(
  <div className="badge-container" style={{ padding: '40px 16px' }}>
    <Badge text={9}>
      <span className="head-example"></span>
    </Badge>

    <Badge text={'new'}>
      <span className="head-example"></span>
    </Badge>

  </div>
, mountNode);
````

````css
.am-badge {
  margin-right: 8px;
}
````
