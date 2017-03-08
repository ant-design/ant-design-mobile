---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

遮罩层模式

## en-US

Overlayer mode


````jsx
import { Drawer, List, NavBar } from 'antd-mobile';

class App1 extends React.Component {
  state = {
    open: false,
    position: 'left',
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  render() {
    const sidebar = (<List>
      {[...Array(20).keys()].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          >Category</List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>);
      })}
    </List>);

    const drawerProps = {
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    return (<div>
      <NavBar iconName="ellipsis" onLeftClick={this.onOpenChange}>Basic</NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight - 200 }}
        sidebar={sidebar}
        dragHandleStyle={{ display: 'none' }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        {...drawerProps}
      >
        Click upper-left corner icon
      </Drawer>
    </div>);
  }
}

ReactDOM.render(<App1 />, mountNode);
````
````css
.my-drawer {
  position: relative;
  overflow: auto;
}
.my-drawer .am-drawer-sidebar {
  background-color: #fff;
  overflow: auto;
}
.my-drawer .am-drawer-sidebar .am-list {
  width: 6rem;
  padding: 0;
}
````
