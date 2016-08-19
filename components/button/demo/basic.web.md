---
order: 0
title: 类型/type
---

主按钮和次按钮可独立使用，需要强引导用主按钮。

在有多个操作同时出现时，需要区分主次优先级，主按钮在同一个操作区域建议最多出现一次。


````jsx
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
        <NavBar iconName={false} rightContent={(
          <span
            style={{ cursor: 'pointer' }}
            onClick={this.switchDark}
          >
            {this.state.dark ? '白天' : '夜间'}
          </span>
          )}>
          类型/type
        </NavBar>

        <div style={{ margin: '0 8px' }}>
          <div style={{ margin: '32px 0' }}>
            <p className="demo-p">type="primary" - 用于主要操作或必须点击才能完成流程的操作</p>
            <div style={{ height: 8 }} />
            <Button type="primary" onClick={e => console.log(e)}>primary按钮</Button>
          </div>

          <div style={{ margin: '32px 0' }}>
            <p className="demo-p">默认type - 用于较轻或不希望引导用户使用的操作</p>
            <div style={{ height: 8 }} />
            <Button>default 按钮</Button>
          </div>

          <div style={{ margin: '32px 0' }}>
            <p className="demo-p">提醒按钮</p>
            <div style={{ height: 8 }} />
            <Button type="warning">warning 按钮</Button>
          </div>

          <div style={{ margin: '32px 0' }}>
            <p className="demo-p">添加 loading 属性即可让按钮处于加载状态</p>
            <div style={{ height: 8 }} />
            <Button loading>loading 按钮</Button>
          </div>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<ButtonExample />, mountNode);
````
