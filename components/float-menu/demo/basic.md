---
order: 0
title: FloatMenu
---

<style>
#preview-components-float-menu-demo-basic .title {
  display: inline-block;
  width: 300px;
  text-align: right;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>


````jsx
import { FloatMenu, Button } from 'antm';
const Item = FloatMenu.Item;

const Test = React.createClass({
  getInitialState() {
    return {
      visible: false,
      selected: '',
    };
  },
  onSelect(opt) {
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  },
  handleVisibleChange(visible) {
    this.setState({
      visible,
    });
  },
  render() {
    let overlay = [1, 2, 3].map((i, index) => <Item key={index} value={`option ${i}`}>option {i}</Item>);
    overlay = overlay.concat([
      <Item key="4" value="disabled" disabled>disabled opt</Item>,
      <Item key="5" value="special" iconName="github">special opt</Item>,
      <Item key="6" value="button ct" iconName="github"><Button
        size="small"
        inline
        onClick={() => { this.handleVisibleChange(false); }}
        >关闭</Button></Item>,
    ]);
    return (<div>
      <span>选中了 {this.state.selected}</span>
      <FloatMenu
        visible={this.state.visible}
        overlay={overlay}
        onVisibleChange={this.handleVisibleChange}
        onSelect={this.onSelect}
      >
        <a className="title" href="#">menu</a>
      </FloatMenu>
    </div>);
  }
});

ReactDOM.render(<Test />, mountNode);
````
