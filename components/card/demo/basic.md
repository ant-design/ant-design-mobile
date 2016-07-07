---
order: 0
title: 展示
---

Card

````jsx
import { Card } from 'antm';
ReactDOM.render(
  <div className="alert-container" style={{ padding: 10 }}>
    <Card>
      <Card.Header
        title="这是 title"
        thumb="http://gravatar.com/avatar/e9c13fb979736b16033acbce4c710ca1.png?size=32"
        extra={<span>this is extra</span>}
      />
      <Card.Body>
        <div style={{ marginLeft: 16 }}>这是卡片内容</div>
      </Card.Body>
      <Card.Footer content="这是卡尾" extra={<div>这是尾部介绍</div>} />
    </Card>
  </div>
, mountNode);
````
