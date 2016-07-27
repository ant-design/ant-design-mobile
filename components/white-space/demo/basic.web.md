---
order: 0
title: 基本
---

上下留白 ```<WhiteSpace size={8} />```


````jsx
import { WhiteSpace, WingBlank, Button } from 'antd-mobile';

let WhiteSpaceExample = React.createClass({
  render() {
    return (
      <div className="button-container">
        <WhiteSpace />
        <WingBlank>
          <Button type="primary">上下留白8px</Button>
        </WingBlank>
        <WhiteSpace />
        <div style={{ borderTop: '1px solid #2DB7F5' }} />
        <WhiteSpace size={16} />
        <WingBlank>
          <Button type="primary">上下留白16px</Button>
        </WingBlank>
        <WhiteSpace size={16} />
        <div style={{ borderTop: '1px solid #2DB7F5' }} />
        <WhiteSpace size={32} />
        <WingBlank>
          <Button type="primary">上下留白32px</Button>
        </WingBlank>
        <WhiteSpace size={32} />
        <div style={{ borderTop: '1px solid #2DB7F5' }} />
      </div>
    );
  },
});

ReactDOM.render(<WhiteSpaceExample />, mountNode);
````
