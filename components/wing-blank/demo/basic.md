---
order: 0
title: 基本
---

```<WingBlank size='md'>...</WingBlank>```

````__react
import { WingBlank, WhiteSpace, Button } from 'antd-mobile';


const WingBlankExample = React.createClass({
  render() {
    return (
      <div className="button-container">
        <WhiteSpace />
        <WingBlank>
          <Button type="primary">两翼留白lg(默认)</Button>
        </WingBlank>
        <WhiteSpace />
        <div style={{ borderTop: '1px solid #108ee9' }} />
        <WhiteSpace />
        <WingBlank size="md">
          <Button type="primary">两翼留白md</Button>
        </WingBlank>
        <WhiteSpace />
        <div style={{ borderTop: '1px solid #108ee9' }} />
        <WhiteSpace />
        <WingBlank size="sm">
          <Button type="primary">两翼留白sm</Button>
        </WingBlank>
        <WhiteSpace />
      </div>
    );
  },
});

ReactDOM.render(<WingBlankExample />, mountNode);
````
