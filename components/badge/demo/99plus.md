---
order: 3
title: 大数字
---

数字大于99，会显示 `99+`


````jsx
import { Badge } from 'antm';

ReactDOM.render(
  <div className="badge-container" style={{ padding: '40px 16px' }}>
    <Badge text={99}>
        <a href="#" className="head-example"></a>
    </Badge>

    <Badge text={108}>
        <a href="#" className="head-example"></a>
    </Badge>
  </div>
, mountNode);
````

````css
.am-badge {
  margin-right: 8px;
}
````
