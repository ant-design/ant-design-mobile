---
order: 0
title: 展示
---

Card

````jsx
import { Card } from 'antd-mobile';

ReactDOM.render(
  <div className="alert-container" style={{ padding: 10 }}>
    <Card>
      <Card.Header
        title="这是 title"
        thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
        extra={<span>this is extra</span>}
      />
      <Card.Body>
        <div>这是卡片内容</div>
      </Card.Body>
      <Card.Footer content="这是卡尾" extra={<div>这是尾部介绍</div>} />
    </Card>
  </div>
, mountNode);
````
