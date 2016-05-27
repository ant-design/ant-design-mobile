---
order: 0
title: mode
---

模式

---

````jsx
import { NavBar, Icon, WingBlank, WhiteSpace } from 'antm';
ReactDOM.render(
  <div>
    <WhiteSpace />
    <WingBlank>
      <NavBar leftContent="返回"
        rightContent={[<Icon key="0" type="user" />, <Icon key="1" type="search" />, <Icon key="2" type="plus" />]}
      >NavBar</NavBar>
    </WingBlank>
    <WhiteSpace />
    <WingBlank>
      <NavBar leftContent="返回" mode="light"
        rightContent={[<Icon key="0" type="user" />, <Icon key="1" type="search" />, <Icon key="2" type="plus" />]}
      >NavBar</NavBar>
    </WingBlank>
  </div>
, mountNode);
````
