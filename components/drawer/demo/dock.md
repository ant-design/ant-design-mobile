---
order: 1
title: 嵌入文档模式
---

嵌入到文档流中


````jsx
import { Drawer, List, NavBar } from 'antd-mobile';

const App = React.createClass({
  getInitialState() {
    return {
      docked: false,
    };
  },
  onDock(d) {
    this.setState({
      [d]: !this.state[d],
    });
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
      docked: this.state.docked,
      open: false,
      position: 'left',
    };
    return (<div style={{ height: '100%' }}>
      <NavBar iconName="ellipsis" onLeftClick={() => this.onDock('docked')}>嵌入文档</NavBar>
      <div className="drawer-container">
        <Drawer sidebar={sidebar}
          sidebarStyle={{ border: '1px solid #ddd' }}
          contentStyle={{ marginLeft: 5 }}
          dragHandleStyle={{ display: 'none' }}
          {...drawerProps}
        >
          请点击左上角
        </Drawer>
      </div>
    </div>);
  },
});

ReactDOM.render(<App />, mountNode);
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
