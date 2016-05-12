---
order: 0
title: 基本
---

遮罩层模式

---

````jsx
import { Drawer, Button, List } from 'antm';

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
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    return (<div className="drawer-container">
      <Drawer sidebar={sidebar} dragHandleStyle={{ display: 'none' }} {...drawerProps}>
        <Button type="primary" inline onClick={this.onOpenChange}>
          {this.state.open ? 'hide menu' : 'show menu'}
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
}
</style>
