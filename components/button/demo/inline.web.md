---
order: 3
title: 尺寸/size、行内按钮/inline
---

支持大小两种尺寸。

支持是否是行内按钮。


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
        <NavBar iconName={false} rightContent={<span
          style={{ cursor: 'pointer' }}
          onClick={this.switchDark}
        >{this.state.dark ? '白天' : '夜间'}</span>}>
          尺寸/行内
        </NavBar>
        <div style={{ margin: '0 8px' }}>
          <div style={{ margin: '32px 0' }}>
            <p className="demo-p">主按钮</p>
            <div style={{ height: 8 }} />
            <Button type="primary">primary 按钮</Button>
            <div style={{ height: 8 }} />
            <Button type="primary" inline>inline</Button>&nbsp;
            <Button type="primary" size="small" inline>inline</Button>
          </div>

          <div style={{ margin: '32px 0' }}>
            <p className="demo-p">次按钮</p>
            <div style={{ height: 8 }} />
            <Button>default 按钮</Button>
            <div style={{ height: 8 }} />
            <Button inline>inline</Button>&nbsp;
            <Button size="small" inline>inline</Button>
          </div>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<ButtonExample />, mountNode);
````
