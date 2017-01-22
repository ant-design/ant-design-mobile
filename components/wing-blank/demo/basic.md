---
order: 0
title: 基本
---

```<WingBlank size='md'>...</WingBlank>```

````__react
import { WingBlank, WhiteSpace } from 'antd-mobile';

const PlaceHolder = (props) => (
  <div style={{
    backgroundColor: '#ebebef',
    color: '#bbb',
    textAlign: 'center',
    height: '0.6rem',
    lineHeight: '0.6rem',
    width: '100%',
  }} {...props}
  >Block</div>
);

const WingBlankExample = React.createClass({
  render() {
    return (
      <div style={{ padding: '0.3rem 0' }}>
        <WingBlank><PlaceHolder /></WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="md"><PlaceHolder /></WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="sm"><PlaceHolder /></WingBlank>
      </div>
    );
  },
});

ReactDOM.render(<WingBlankExample />, mountNode);
````
