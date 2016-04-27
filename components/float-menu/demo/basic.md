---
order: 0
title: FloatMenu
---

<style>
#components-float-menu-demo-basic .title {
  display: inline-block;
  width: 300px;
  text-align: right;
  padding: 10px;
  border: 1px solid #ccc;
}
.am-floatmenu .am-list {
  padding: 0;
}
.am-floatmenu .am-list .am-list-item:after {
  left: 0;
}
</style>


````jsx
import { FloatMenu, Button, List } from 'antm';

const Test = React.createClass({
  getInitialState() {
    return {
      visible: false,
    };
  },
  handleVisibleChange(visible) {
    this.setState({
      visible,
    });
  },
  render() {
    const overlay = (<div>
      <List>
        <List.Body>
          <List.Item>item 1</List.Item>
          <List.Item extra={<Button
            size="small"
            inline
            onClick={() => { this.handleVisibleChange(false); }}
            >关闭</Button>}
          >
            item 2
          </List.Item>
        </List.Body>
      </List>
    </div>);
    return (<div>
      <FloatMenu
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        overlay={overlay}
      >
        <a className="title" href="#">menu</a>
      </FloatMenu>
    </div>);
  }
});

ReactDOM.render(<Test />, mountNode);
````
