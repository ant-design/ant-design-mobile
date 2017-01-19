---
order: 0
title: NavBar
---

````__react
import { NavBar, Icon } from 'antd-mobile';

ReactDOM.render(
  <div>
    <NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
  </div>
, mountNode);
````
