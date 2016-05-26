---
order: 0
title: 基本
---

```<WingBlank mode={8}>...</WingBlank>```

````jsx
import { WingBlank, WhiteSpace, Button } from 'antm';


let WingBlankExample = React.createClass({
  render() {
    return (
    <div className="button-container">
      <WhiteSpace />
      <WingBlank>
        <Button>两翼留白8px</Button>
      </WingBlank>
      <WhiteSpace />
      <div style={{ borderTop: '1px solid #2DB7F5' }} />
      <WhiteSpace />
      <WingBlank mode={16}>
        <Button type="primary">两翼留白16px</Button>
      </WingBlank>
      <WhiteSpace />
      <div style={{ borderTop: '1px solid #2DB7F5' }} />
      <WhiteSpace />
      <WingBlank mode={32}>
        <Button>两翼留白32px</Button>
      </WingBlank>
      <WhiteSpace />
    </div>
    );
  }
});

ReactDOM.render(<WingBlankExample />, mountNode);
````
