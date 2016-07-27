---
order: 2
title: 失效状态/disabled
---

添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。


````jsx
// 此处用作demo展示，不要用在生产环境
this.customNavFlag = true;


import { Button, WingBlank, WhiteSpace, NavBar } from 'antd-mobile';

const ButtonExample = React.createClass({
  getInitialState() {
    return {
      dark: false,
    };
  },
  switchDark() {
    this.setState({ dark: !this.state.dark });
  },
  render() {
    return (
      <div className="button-container"
        style={{ backgroundColor: this.state.dark ? 'black' : 'white' }}
      >
        <NavBar iconName={false} rightContent={<span
          style={{ cursor: 'pointer' }}
          onClick={this.switchDark}
        >{this.state.dark ? '白天' : '夜间'}</span>}
        >
          失效状态
        </NavBar>
        <WhiteSpace size={32} />
        <WingBlank>
          <p className="demo-p">主按钮失效</p>
          <WhiteSpace />
          <Button type="primary" disabled>primary 按钮</Button>
          <WhiteSpace />
          <Button type="primary" ghost disabled>primary ghost 按钮</Button>
        </WingBlank>
        <WhiteSpace size={32} />
        <WingBlank>
          <p className="demo-p">次按钮失效</p>
          <WhiteSpace />
          <Button disabled>default disabled 按钮</Button>
          <WhiteSpace />
          <Button ghost disabled>default ghost disabled 按钮</Button>
        </WingBlank>
        <WhiteSpace />
      </div>
    );
  },
});

ReactDOM.render(<ButtonExample />, mountNode);
````
