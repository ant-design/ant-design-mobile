---
order: 1
title: 大小
---

````__react
import { Icon } from 'antd-mobile';

ReactDOM.render(<div className="container2">
  <div className="icon-wrapper"><Icon type="search" size="xxs" /><div>xxs</div></div>
  <div className="icon-wrapper"><Icon type="search" size="xs" /><div>xs</div></div>
  <div className="icon-wrapper"><Icon type="search" size="sm" /><div>sm</div></div>
  <div className="icon-wrapper"><Icon type="search" size="md" /><div>md</div></div>
  <div className="icon-wrapper"><Icon type="search" size="lg" /><div>lg</div></div>
</div>, mountNode);
````

````css
.container2 {
    margin-top: 50px;
    display: flex;
    align-items: flex-end;
}

.icon-wrapper {
    text-align: center;
    flex: 0 0 20%;
}
````