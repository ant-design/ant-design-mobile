---
order: 1
title: 事件
---

当 Slider 的值发生改变时，会触发 `onChange` 事件，并把改变后的值作为参数传入。在 `touchend` 时，会触发 `onAfterChange` 事件，并把当前值作为参数传入。



````__react
import { Slider, WingBlank, WhiteSpace } from 'antd-mobile';

function log(value) {
  console.log(value);
}

const App = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Slider defaultValue={30} onChange={log} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Slider defaultValue={30} onAfterChange={log} />
        </WingBlank>
        <WhiteSpace size="lg" />
      </div>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````
