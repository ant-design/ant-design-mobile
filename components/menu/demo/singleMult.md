---
order: 3
title:
  zh-CN: 单级菜单多选
  en-US: Single Menu Multiple Select
---

````jsx
/* eslint global-require:0, no-nested-ternary:0 */
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';

const data = [
  {
    value: '1',
    label: 'Food',
  }, {
    value: '2',
    label: 'Supermarket',
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
  },
];

class MultMenuExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
    };
  }
  onChange = (value) => {
    console.log(value);
  }
  onOk = (value) => {
    console.log(value);
    this.onCancel();
  }
  onCancel = () => {
    this.setState({ show: false });
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  }

  render() {
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="single-mult-foo-menu"
        data={initData}
        value={['1']}
        level={1}
        onChange={this.onChange}
        onOk={this.onOk}
        onCancel={this.onCancel}
        height={document.documentElement.clientHeight * 0.6}
        multSelect
      />
    );
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className={show ? 'single-mult-menu-active' : ''}>
        <div>
          <NavBar
            leftContent="Menu"
            mode="light"
            iconName={require('./menu.svg')}
            onLeftClick={this.handleClick}
            className="single-mult-top-nav-bar"
          >
            Single Mult menu
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
      </div>
    );
  }
}

ReactDOM.render(<MultMenuExample />, mountNode);
````

```css
.single-mult-foo-menu {
  position: absolute;
  z-index: 70 !important;
  width: 100%;
}
.single-mult-top-nav-bar {
  position: relative;
  z-index: 70 !important;
  background-color: #008AE6;
  color: #FFF;
}
.am-navbar-title {
  color: #FFF!important;
}
.single-mult-menu-active:after {
  content: ' ';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.4;
  z-index: 69;
}
```
