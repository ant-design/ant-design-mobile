---
order: 0
title:
  zh-CN: 导航栏
  en-US: NavBar
---

````jsx
import { NavBar, Icon } from 'antd-mobile';

ReactDOM.render(
  <div>
    <NavBar leftContent="back"
      mode="light"
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
    <NavBar leftContent="back"
      mode="dark"
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
  </div>
, mountNode);
````
