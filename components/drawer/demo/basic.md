---
order: 0
title: 基本
---

Drawer

---

````jsx
import { Drawer, Button } from 'antm';

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
      <h3>
        sideMenu
      </h3>
      <p>this is content!</p>
    </div>);

    const drawerProps = {
      docked: this.state.docked,
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    return (<div className="drawer-container">
      <Drawer sidebar={sidebar} {...drawerProps}>
        <p>React component</p>
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
#components-drawer-demo-basic .drawer-container {
  position: relative;
  height: 400px;
}
#components-drawer-demo-basic .am-drawer-content {
  padding: 10px;
}
#components-drawer-demo-basic .am-drawer-sidebar {
  padding: 16px;
  background-color: #e4f6fe;
}
</style>
