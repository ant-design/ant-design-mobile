---
order: 0
title: NavBar
---

````jsx
import { NavBar, Icon } from 'antd-mobile';

ReactDOM.render(
  <div>
    <div style={{ height: 8 }} />
    <NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}
      rightContent={[<Icon key="0" type="search" />, <Icon key="1" type="ellipsis" />]}
    >NavBar</NavBar>
  </div>
, mountNode);
````
