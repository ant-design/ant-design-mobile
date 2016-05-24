---
order: 0
title: 基本
---

上下留白 ```<WhiteSpace mode={8} />```


````jsx
import { WhiteSpace, WingBlank } from 'antm';

let WhiteSpaceExample = React.createClass({
  render() {
    return (
    <div className="button-container">
      <div style={{ textAlign: 'center' }}>
        8px
      </div>
      <WingBlank>
        <WhiteSpace style={{ backgroundColor: '#2DB7F5' }} />
      </WingBlank>
      <div style={{ textAlign: 'center' }}>
        16px
      </div>
      <WingBlank>
        <WhiteSpace mode={16} style={{ backgroundColor: '#2DB7F5' }} />
      </WingBlank>
      <div style={{ textAlign: 'center' }}>
        32px
      </div>
      <WingBlank>
        <WhiteSpace mode={32} style={{ backgroundColor: '#2DB7F5' }} />
      </WingBlank>
      <WhiteSpace />
    </div>
    );
  }
});

ReactDOM.render(<WhiteSpaceExample />, mountNode);
````
