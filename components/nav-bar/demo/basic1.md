---
order: 1
title: other
---

左侧或右侧无内容


````jsx
import { NavBar, Icon, WingBlank, WhiteSpace } from 'antd-mobile';
ReactDOM.render(
  <div>
    <WhiteSpace />
    <WingBlank>
      <NavBar iconName={false}
        rightContent={[<Icon key="0" type="user" />, <Icon key="1" type="search" />, <Icon key="2" type="plus" />]}
      >NavBar</NavBar>
    </WingBlank>
    <WhiteSpace />
    <WingBlank>
      <NavBar leftContent="返回">NavBar</NavBar>
    </WingBlank>
    <WhiteSpace />
    <WingBlank>
      <NavBar iconName={false}
        rightContent={<Icon type="ellipsis" />}
      >NavBar</NavBar>
    </WingBlank>
    <WhiteSpace />
    <WingBlank>
      <NavBar iconName={false} leftContent="取消"
        rightContent="完成"
      >NavBar</NavBar>
    </WingBlank>
  </div>
, mountNode);
````
