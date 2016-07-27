---
order: 1
title: 幽灵模式/ghost
---

当操作并不需要太过强调/明显时，可以启动幽灵变量。

该变量是在原有按钮类型上的变形，主次等级遵循原有按钮的规则。


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
          幽灵模式/ghost
        </NavBar>
        <WhiteSpace size={32} />
        <WingBlank>
          <p className="demo-p">主按钮的幽灵模式，用于较轻量级或希望引导用户使用的操作</p>
          <WhiteSpace />
          <Button type="primary" ghost>primary ghost 按钮</Button>
        </WingBlank>
        <WhiteSpace size={32} />
        <WingBlank>
          <p className="demo-p">次按钮的幽灵模式，用于较轻量级或不希望引导用户使用的操作</p>
          <WhiteSpace />
          <Button ghost>default ghost 按钮</Button>
        </WingBlank>
        <WhiteSpace />
      </div>
    );
  },
});

ReactDOM.render(<ButtonExample />, mountNode);
````
