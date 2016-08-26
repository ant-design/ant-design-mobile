---
order: 1
title: other
---

左侧或右侧无内容


````jsx
import { NavBar, Icon } from 'antd-mobile';

ReactDOM.render(
  <div style={{ padding: 8 }}>
    <NavBar iconName={false}
      rightContent={[<Icon key="0" type="user" />, <Icon key="1" type="search" />, <Icon key="2" type="plus" />]}
    >NavBar</NavBar>
    <div style={{ height: 8 }} />
    <NavBar leftContent="返回">NavBar</NavBar>
    <div style={{ height: 8 }} />
    <NavBar iconName={false}
      rightContent={<Icon type="ellipsis" />}
    >NavBar</NavBar>
    <div style={{ height: 8 }} />
    <NavBar iconName={false} leftContent="取消"
      rightContent="完成"
    >NavBar</NavBar>
  </div>
, mountNode);
````
