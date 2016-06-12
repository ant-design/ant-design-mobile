---
order: 2
title: 角标
---

像丝带一样的角标


````jsx
import { Badge } from 'antm';

ReactDOM.render(
  <div className="badge-container" style={{ padding: '40px 16px' }}>

    <Badge text={'new'} corner>
        <span className="head-example"></span>
    </Badge>

    <Badge text={'限时优惠'} corner size="large">
        <span className="head-example head-example-l"></span>
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
.head-example-l {
  width: 72px;
  height: 72px;
}
````
