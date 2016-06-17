---
order: 1
title: 事件
---

当 Slider 的值发生改变时，会触发 `onChange` 事件，并把改变后的值作为参数传入。在 `touchend` 时，会触发 `onAfterChange` 事件，并把当前值作为参数传入。



````jsx
import { Slider, WingBlank, WhiteSpace } from 'antm';

function log(value) {
  console.log(value);
}

let App = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace mode={32} />
        <WingBlank mode={20}>
          <Slider defaultValue={30} onChange={log} />
        </WingBlank>
        <WhiteSpace mode={32} />
        <WingBlank mode={20}>
          <Slider range step={10} defaultValue={[20, 50]} onChange={log} />
        </WingBlank>
        <WhiteSpace mode={32} />
        <WingBlank mode={20}>
          <Slider defaultValue={30} onAfterChange={log} />
        </WingBlank>
        <WhiteSpace mode={32} />
      </div>
    );
  }
});

ReactDOM.render(<App />, mountNode);
````
