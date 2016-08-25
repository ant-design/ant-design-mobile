---
order: 0
title: 基本
---

遮罩层模式


````jsx
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
      <List.Body>
        {[...Array(20).keys()].map((i, index) => {
          if (index === 0) {
            return (<List.Item key={index}
              thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
              multipleLine
            >分类 - {index}</List.Item>);
          }
          return (<List.Item key={index}
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
          >分类 - {index}</List.Item>);
        })}
      </List.Body>
    </List>);

    const drawerProps = {
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    return (<div style={{ height: '100%' }}>
      <NavBar iconName="ellipsis" onLeftClick={this.onOpenChange}>
        基本
      </NavBar>
      <div className="drawer-container">
        <Drawer sidebar={sidebar} dragHandleStyle={{ display: 'none' }} {...drawerProps}>
          请点击左上角
        </Drawer>
      </div>
    </div>);
  },
});

ReactDOM.render(<App1 />, mountNode);
````

<style>
.drawer-container {
  position: relative;
  height: 100%;
}
.am-drawer {
  overflow: auto;
}
.am-drawer-sidebar {
  max-width: 260px;
  background-color: #fff;
  overflow: auto;
}
.am-drawer-sidebar .am-list {
  padding: 0;
}
</style>
