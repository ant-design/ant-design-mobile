---
order: 0
title: 展示
---

NavBar

---

````jsx
import { NavBar, Button } from 'antm';
ReactDOM.render(
  <div style={{ margin: 10 }}>
    <NavBar leftContent="返回"
      rightContent={<Button size="small" onClick={() => {}}>操作</Button>}
    >NavBar</NavBar>
  </div>
, mountNode);
````
