---
order: 0
title: 基本
---

Button

---

````jsx
import { Button, WingBlank, WhiteSpace } from 'antm';

const ButtonExample = React.createClass({
  getInitialState() {
    return {
      dark: false,
    };
  },
  render() {
    return (
      <div className="button-container"
        style={{ backgroundColor: this.state.dark ? 'black' : 'white' }}
      >
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" size="small" inline
            onClick={() => { this.setState({ dark: !this.state.dark }); }}
          >{`点击切换：${this.state.dark ? '白天模式' : '夜间模式'}`}</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary">primary按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" ghost>primary ghost 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button>default 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button ghost>default ghost 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button loading>loading 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="warning">warning 按钮</Button>
        </WingBlank>

        <WhiteSpace />
        <WingBlank>
          <Button type="primary" disabled>primary 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" ghost disabled>primary ghost 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button disabled>default disabled 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button ghost disabled>default ghost disabled 按钮</Button>
        </WingBlank>
        <WhiteSpace />
      </div>
    );
  }
});

ReactDOM.render(<ButtonExample />, mountNode);
````
