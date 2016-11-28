---
order: 0
title: NavBar
---

````jsx
import { NavBar, Icon } from 'antd-mobile';

ReactDOM.render(
  <div>
    <NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <span key="0" style={{ marginRight: '0.32rem' }}><Icon type="search" /></span>,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
  </div>
, mountNode);
````
