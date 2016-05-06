---
order: 1
title: 输入框
---

弹出输入框的形式
---

````jsx
import { modal, Button, WingBlank } from 'antm';

let App = React.createClass({
  render() {
    const content = (
      <input ref="name" name="name" defaultValue="123" style={{ width: '100%' }} />
    );

    return (
      <div>
        <WingBlank mode={20}>
          <Button onClick={() => {
            modal('输入名字', content, [
              { text: '确定', onPress: () => {
                console.log(this.refs.name.value);
              } }
            ]);
          }}>输入框形式 </Button>
        </WingBlank>
      </div>
    );
  }
});


ReactDOM.render(
  <App />
, mountNode);

````
