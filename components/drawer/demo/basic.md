---
order: 0
title: 基本
---

Drawer

---

````jsx
import { Drawer, Button, List } from 'antm';

const App = React.createClass({
  getInitialState() {
    return {
      docked: false,
      open: false,
      position: 'left',
    };
  },
  onOpenChange(open) {
    console.log('onOpenChange', open);
    this.setState({ open });
  },
  onDock() {
    const docked = !this.state.docked;
    this.setState({
      docked,
    });
    if (!docked) {
      this.onOpenChange(false);
    }
  },
  render() {
    const sidebar = (<div>
      <List >
        <List.Body>
          {[1, 2, 3, 4, 5, 6].map((i, index) => {
            if (index === 0) {
              return (<List.Item
                thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg"
                line={2}
              ><div className="am-list-title">收银员</div><div className="am-list-brief">仅可进行收款、退款及查账操作</div></List.Item>);
            }
            return (<List.Item key={index}
              line={2}
            ><div className="am-list-title">运营</div><div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div></List.Item>);
          })}
        </List.Body>
      </List>
    </div>);

    const drawerProps = {
      docked: this.state.docked,
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    return (<div className="drawer-container">
      <Drawer sidebar={sidebar} dragHandleStyle={{ display: 'none' }} {...drawerProps}>
        <Button type="primary" inline onClick={this.onDock}>
          {this.state.docked ? 'hide menu' : 'show menu'}
        </Button>
      </Drawer>
    </div>);
  },
});

ReactDOM.render(<App />, mountNode);
````

<style>
#preview-components-drawer-demo-basic .drawer-container {
  position: relative;
  height: 660px;
}
#preview-components-drawer-demo-basic .am-drawer-content {
  padding: 10px;
}
#preview-components-drawer-demo-basic .am-drawer-sidebar {
  max-width: 260px;
}
#preview-components-drawer-demo-basic .am-drawer-sidebar .am-list {
  padding: 0;
  margin: 10px 0;
}
</style>
