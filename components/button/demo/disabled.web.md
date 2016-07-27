---
order: 2
title: 失效状态/disabled
---

添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。


````jsx
// 此处用作demo展示，不要用在生产环境
this.customNavFlag = true;


import { Button, NavBar } from 'antd-mobile';

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
        style={{ backgroundColor: this.state.dark ? 'black' : 'white', height: '100%' }}
      >
        <NavBar iconName={false} rightContent={<span
          style={{ cursor: 'pointer' }}
          onClick={this.switchDark}
        >{this.state.dark ? '白天' : '夜间'}</span>}
        >
          失效状态
        </NavBar>

        <div style={{ margin: '0 8px' }}>
          <div style={{ margin: '32px 0' }}>
            <p className="demo-p">主按钮失效</p>
            <div style={{ height: 8 }} />
            <Button type="primary" disabled>primary 按钮</Button>
            <div style={{ height: 8 }} />
            <Button type="primary" ghost disabled>primary ghost 按钮</Button>
          </div>

          <div style={{ margin: '32px 0' }}>
            <p className="demo-p">次按钮失效</p>
            <div style={{ height: 8 }} />
            <Button disabled>default disabled 按钮</Button>
            <div style={{ height: 8 }} />
            <Button ghost disabled>default ghost disabled 按钮</Button>
          </div>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<ButtonExample />, mountNode);
````
