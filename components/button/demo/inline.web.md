---
order: 3
title: 尺寸/size、行内按钮/inline
---

支持大小两种尺寸。

支持是否是行内按钮。


````jsx
// 此处用作demo展示，不要用在生产环境
this.customNavFlag = true;


import { Button, WingBlank, WhiteSpace, NavBar } from 'antm';

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
          尺寸/行内
        </NavBar>
        <WhiteSpace size={32} />
        <WingBlank>
          <p className="demo-p">主按钮</p>
          <WhiteSpace />
          <Button type="primary">primary 按钮</Button>
          <WhiteSpace />
          <Button type="primary" size="small">primary small 按钮</Button>
          <WhiteSpace />
          <Button type="primary" inline>inline</Button>&nbsp;
          <Button type="primary" size="small" inline>inline</Button>
        </WingBlank>
        <WhiteSpace size={32} />
        <WingBlank>
          <p className="demo-p">次按钮</p>
          <WhiteSpace />
          <Button>default 按钮</Button>
          <WhiteSpace />
          <Button size="small">default small 按钮</Button>
          <WhiteSpace />
          <Button inline>inline</Button>&nbsp;
          <Button size="small" inline>inline</Button>
        </WingBlank>
        <WhiteSpace />
      </div>
    );
  },
});

ReactDOM.render(<ButtonExample />, mountNode);
````
