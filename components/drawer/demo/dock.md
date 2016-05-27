---
order: 1
title: 嵌入文档模式
---

嵌入到文档流中

---

````jsx
import { Drawer, List, NavBar } from 'antm';

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
    App.customNavBar = (<NavBar iconName="ellipsis"
      onLeftClick={() => this.onDock('docked')}
    >嵌入文档</NavBar>);

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
      open: false,
      position: 'left',
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
