---
order: 0
title: FloatMenu
---


````jsx
// 此处用作demo展示，不要用在生产环境
this.customNavFlag = true;


import { FloatMenu, Button, NavBar } from 'antm';
const Item = FloatMenu.Item;

const App = React.createClass({
  getInitialState() {
    return {
      visible: false,
      visible1: false,
      selected: '',
    };
  },
  onSelect(opt) {
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
    this.props.onNavBarChange();
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
      <Item key="6" value="button ct" iconName="github">
        <Button
          size="small"
          inline
          onClick={() => this.handleVisibleChange(false)}
        >
          关闭
        </Button>
      </Item>,
    ]);

    return (<div>
      <NavBar iconName={false}
        rightContent={<FloatMenu
          visible={this.state.visible}
          overlay={overlay}
          popupAlign={{
            offset: [5, 14],
          }}
          onVisibleChange={this.handleVisibleChange}
          onSelect={this.onSelect}
        >
          <a href="#" style={{ color: 'white' }}>菜单</a>
        </FloatMenu>}
      >
        FloatMenu
      </NavBar>
      <p>选中了 {this.state.selected}</p>
      <div style={{ paddingTop: 80, paddingLeft: 100 }}>
        <FloatMenu
          visible={this.state.visible1}
          overlay={[
            <Item key="0" value="0">item 0</Item>,
            <Item key="1" value="1">item 1</Item>,
            <Item key="2" value="1">item 1</Item>,
          ]}
          placement="topRight"
          onVisibleChange={v => this.setState({ visible1: v })}
        >
          <a href="#">菜单</a>
        </FloatMenu>
      </div>
    </div>);
  },
});

ReactDOM.render(<App />, mountNode);
````
