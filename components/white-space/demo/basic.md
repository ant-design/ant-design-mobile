---
order: 0
title: 基本
---

上下留白 <WhiteSpace mode={8} />


````jsx
import { WhiteSpace, WingBlank } from 'antm';


let WhiteSpaceExample = React.createClass({
  render() {
    return (
    <div className="button-container">
      <WhiteSpace style={{ backgroundColor: '#2DB7F5' }} />
      <WingBlank style={{ textAlign: 'center' }}>
        上下留白8px
      </WingBlank>
      <WhiteSpace mode={20} style={{ backgroundColor: '#2DB7F5' }} />
      <WingBlank style={{ textAlign: 'center' }}>
        上下留白20px
      </WingBlank>
      <WhiteSpace mode={40} style={{ backgroundColor: '#2DB7F5' }} />
      <WingBlank style={{ textAlign: 'center' }}>
        上下留白40px
      </WingBlank>
      <WhiteSpace />
    </div>
    );
  }
});

ReactDOM.render(<WhiteSpaceExample />, mountNode);
````
