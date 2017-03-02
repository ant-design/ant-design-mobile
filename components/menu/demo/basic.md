---
order: 0
title:
  zh-CN: 菜单
  en-US: Menu
---

````jsx
/* eslint global-require:0, no-nested-ternary:0 */
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';

const data = [
  {
    value: '1',
    label: '全部分类',
    isLeaf: true,
  }, {
    value: '2',
    label: '美食',
    children: [
      {
        label: '全部美食',
        value: '22',
        disabled: false,
      },
      {
        label: '中餐',
        value: '21',
      }, {
        label: '火锅',
        value: '23',
      }, {
        label: '自助餐',
        value: '24',
      }, {
        label: '快餐',
        value: '25',
      }, {
        label: '小吃',
        value: '26',
      }, {
        label: '面包甜点',
        value: '27',
      }, {
        label: '生鲜水果',
        value: '28',
      }, {
        label: '面食',
        value: '29',
      }, {
        label: '休闲食品',
        value: '210',
      }],
  }, {
    value: '3',
    label: '超市',
    children: [
      {
        label: '全部超市',
        value: '31',
      }, {
        label: '超市',
        value: '32',
        disabled: true,
      }, {
        label: '便利店',
        value: '33',
      }, {
        label: '个人护理',
        value: '34',
      }],
  },
];

class MenuExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
    };
  }
  onChange = (value) => {
    let label = '';
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });
    console.log(label);
  }
  handleClick = (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
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
        className="foo-menu"
        data={initData}
        value={['2', '22']}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
      />
      );
    const loadingEl = (
      <div style={{ width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className={show ? 'menu-active' : ''}>
        <div>
          <NavBar
            leftContent="菜单"
            mode="light"
            iconName={require('./menu.svg')}
            onLeftClick={this.handleClick}
            className="top-nav-bar"
          >
            标题
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
      </div>
    );
  }
}

ReactDOM.render(<MenuExample />, mountNode);
````

```css
.foo-menu {
  z-index: 1000 !important;
}
.top-nav-bar {
  background-color: #008AE6;
  color: #FFF;
}
.am-navbar-title {
  color: #FFF!important;
}
.menu-active:after {
  content: ' ';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.4;
  z-index: 1;
}
```
