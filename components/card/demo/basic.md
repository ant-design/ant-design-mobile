---
order: 0
title:
  zh-CN: 默认
  en-US: Default
---

## zh-CN

Card 默认样式

## en-US

Default Card

````jsx
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

ReactDOM.render(
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Card>
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
    <WhiteSpace size="lg" />
  </WingBlank>
, mountNode);
````
