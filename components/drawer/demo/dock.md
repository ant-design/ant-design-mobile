---
order: 1
title: 嵌入文档模式
---

嵌入到文档流中

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
              return (<List.Item key={index}
                thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
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
#preview-components-drawer-demo-dock .drawer-container {
  position: relative;
  height: 660px;
}
#preview-components-drawer-demo-dock .am-drawer-content {
  padding: 10px;
}
#preview-components-drawer-demo-dock .am-drawer-sidebar {
  max-width: 260px;
}
#preview-components-drawer-demo-dock .am-drawer-sidebar .am-list {
  padding: 0;
}
</style>
