---
order: 1
title:
  zh-CN: 通栏
  en-US: Full
---


## zh-CN

Card 通栏样式

## en-US

Full Column Card

````jsx
import { Card, WhiteSpace } from 'antd-mobile';

ReactDOM.render(
  <div>
    <WhiteSpace size="lg" />
    <Card full>
      <Card.Header
        title="This is title"
        thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
        extra={<span>this is extra</span>}
      />
      <Card.Body>
        <div>This is content of `Card`</div>
      </Card.Body>
      <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
    </Card>
  </div>
, mountNode);
````
