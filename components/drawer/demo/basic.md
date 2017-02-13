---
order: 0
title: 基本
---

遮罩层模式


````__react
import { Drawer, List, NavBar } from 'antd-mobile';

const App1 = React.createClass({
  getInitialState() {
    return {
      open: false,
      position: 'left',
    };
  },
  onOpenChange(isOpen) {
    console.log(isOpen, arguments);
    this.setState({ open: !this.state.open });
  },
  render() {
    const sidebar = (<List>
      {[...Array(20).keys()].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          >分类</List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >分类{index}</List.Item>);
      })}
    </List>);

    const drawerProps = {
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    return (<div>
      <NavBar iconName="ellipsis" onLeftClick={this.onOpenChange}>基本</NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight - 200 }}
        sidebar={sidebar}
        dragHandleStyle={{ display: 'none' }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        {...drawerProps}
      >
        请点击左上角图标
      </Drawer>
    </div>);
  },
});

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
