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
  onDock() {
    this.setState({
      docked: !this.state.docked,
    });
  },
  render() {
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
      docked: this.state.docked,
      open: this.state.open,
      position: this.state.position,
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
#preview-components-drawer-demo-dock {
  position: relative;
  margin: 0;
  height: 100%;
}
#preview-components-drawer-demo-dock .code-box-demo {
  height: 100%;
}
#preview-components-drawer-demo-dock .drawer-container {
  position: relative;
  height: 100%;
}
#preview-components-drawer-demo-dock .am-drawer-content {
  padding: 10px;
}
#preview-components-drawer-demo-dock .am-drawer-sidebar {
  max-width: 260px;
  background-color: #fff;
  border-right: 1px solid #ddd;
}
#preview-components-drawer-demo-dock .am-drawer-sidebar .am-list {
  padding: 0;
}
</style>
