---
order: 2
title: 角标
---

像丝带一样的角标


````jsx
import { Badge } from 'antd-mobile';

ReactDOM.render(
  <div className="badge-container" style={{ padding: '40px 16px' }}>
    <Badge text={'new'} corner>
      <span className="head-example"></span>
    </Badge>
    <Badge text={'优惠'} corner>
      <span className="head-example"></span>
    </Badge>
  </div>
, mountNode);
````

````css
.head-example {
  width: 1.04rem;
  height: 1.04rem;
  background: rgba(255, 140, 101, 0.15);
  display: inline-block;
}
.am-badge {
  margin-right: 8px;
}
.head-example-l {
  width: 1.44rem;
  height: 1.44rem;
}
````
