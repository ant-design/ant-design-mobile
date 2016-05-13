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
        <a href="#" className="head-example"></a>
    </Badge>

    <Badge text={'限时优惠'} corner size="large">
        <a href="#" className="head-example head-example-l"></a>
    </Badge>

  </div>
, mountNode);
````

````css
.head-example-l {
  width: 72px;
  height: 72px;
}

````