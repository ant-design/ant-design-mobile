---
order: 2
title: 右出
---

嵌入到文档流中

---

````jsx
import { Drawer, List, NavBar } from 'antm';

const App = React.createClass({
  getInitialState() {
    return {
      docked1: false,
    };
  },
  onDock(d) {
    this.setState({
      [d]: !this.state[d],
    });
  },
  render() {
    App.customNavBar = (<NavBar iconName={false}
      rightContent={<span onClick={() => this.onDock('docked1')}>点击</span>}
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

    const drawerProps1 = {
      docked: this.state.docked1,
      open: false,
      position: 'right',
    };
    return (<div className="drawer-container">
      <Drawer sidebar={sidebar} dragHandleStyle={{ display: 'none' }} {...drawerProps1}>
        请点击右上角
      </Drawer>
    </div>);
  },
});

ReactDOM.render(<App />, mountNode);
````
