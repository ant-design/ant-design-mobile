---
order: 0
title: 基本
---

遮罩层模式

---

````jsx
import { Drawer, List, NavBar } from 'antm';

const App = React.createClass({
  getInitialState() {
    return {
      open: false,
      position: 'left',
    };
  },
  onOpenChange() {
    this.setState({ open: !this.state.open });
  },
  render() {
    App.customNavBar = (<NavBar iconName="ellipsis"
      onLeftClick={this.onOpenChange}
    >基本</NavBar>);

    const sidebar = (<List>
      <List.Body>
        {[1, 2, 3, 4, 5, 6].map((i, index) => {
          if (index === 0) {
            return (<List.Item key={index}
              thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
              line={2}
            ><div className="am-list-title">收银员</div><div className="am-list-brief">仅可进行收款、退款及查账操作</div></List.Item>);
          }
          return (<List.Item key={index}
            thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
            line={2}
          ><div className="am-list-title">收银员</div><div className="am-list-brief">仅可进行收款、退款及查账操作</div></List.Item>);
        })}
      </List.Body>
    </List>);

    const drawerProps = {
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    return (<div className="drawer-container">
      <Drawer sidebar={sidebar} dragHandleStyle={{ display: 'none' }} {...drawerProps}>
        请点击左上角
      </Drawer>
    </div>);
  },
});

ReactDOM.render(<App />, mountNode);
````

<style>
.drawer-container {
  position: relative;
  height: 1000px;
}
.am-drawer-sidebar {
  max-width: 260px;
  background-color: #fff;
}
.am-drawer-sidebar .am-list {
  padding: 0;
}
</style>
