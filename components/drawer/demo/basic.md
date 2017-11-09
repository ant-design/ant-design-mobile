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
import { Drawer, List, NavBar, Icon } from 'antd-mobile';

class App1 extends React.Component {
  state = {
    open: true,
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  render() {
    // fix in codepen
    const sidebar = (<List>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
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

    return (<div>
      <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
        Click upper-left corner
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
  -webkit-overflow-scrolling: touch;
}
.my-drawer .am-drawer-sidebar {
  background-color: #fff;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.my-drawer .am-drawer-sidebar .am-list {
  width: 300px;
  padding: 0;
}
````
