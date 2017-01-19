---
order: 0
title: 基本
---

上下留白 ```<WhiteSpace size='md' />```


````__react
import { WhiteSpace, WingBlank, Button } from 'antd-mobile';

const WhiteSpaceExample = React.createClass({
  render() {
    return (
      <div className="button-container">
        <WhiteSpace size="xs" />
        <WingBlank>
          <Button type="primary">上下留白xs</Button>
        </WingBlank>
        <WhiteSpace size="xs" />
        <div style={{ borderTop: '1px solid #108ee9' }} />
        <WhiteSpace size="sm" />
        <WingBlank>
          <Button type="primary">上下留白sm</Button>
        </WingBlank>
        <WhiteSpace size="sm" />
        <div style={{ borderTop: '1px solid #108ee9' }} />
        <WhiteSpace />
        <WingBlank>
          <Button type="primary">上下留白md(默认)</Button>
        </WingBlank>
        <WhiteSpace />
        <div style={{ borderTop: '1px solid #108ee9' }} />
        <WhiteSpace size="lg" />
        <WingBlank>
          <Button type="primary">上下留白lg</Button>
        </WingBlank>
        <WhiteSpace size="lg" />
        <div style={{ borderTop: '1px solid #108ee9' }} />
        <WhiteSpace size="xl" />
        <WingBlank>
          <Button type="primary">上下留白xl</Button>
        </WingBlank>
        <WhiteSpace size="xl" />
        <div style={{ borderTop: '1px solid #108ee9' }} />
      </div>
    );
  },
});

ReactDOM.render(<WhiteSpaceExample />, mountNode);
````
