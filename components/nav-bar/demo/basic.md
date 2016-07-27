---
order: 0
title: mode
---

模式


````jsx
import { NavBar, Icon } from 'antd-mobile';
ReactDOM.render(
  <div style={{ padding: 8 }}>
    <NavBar leftContent="返回"
      rightContent={[<Icon key="0" type="user" />, <Icon key="1" type="search" />, <Icon key="2" type="plus" />]}
    >NavBar</NavBar>
    <div style={{ height: 8 }} />
    <NavBar leftContent="返回" mode="light"
      rightContent={[<Icon key="0" type="user" />, <Icon key="1" type="search" />, <Icon key="2" type="plus" />]}
    >NavBar</NavBar>
  </div>
, mountNode);
````
