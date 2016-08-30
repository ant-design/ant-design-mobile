---
order: 0
title: Popover
---


````jsx
import { Popover, NavBar, Icon, Badge } from 'antd-mobile';

const Item = Popover.Item;

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
  },
  handleVisibleChange(visible) {
    this.setState({
      visible,
    });
  },
  render() {
    return (<div>
      <NavBar iconName={false} rightContent={
        <Popover
          visible={this.state.visible}
          overlay={[
            <Item key="4" value="scan" iconName="scan">扫一扫</Item>,
            <Item key="5" value="special" iconName="qrcode" style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>,
            <Item key="6" value="button ct" iconName="question-circle-o">
              <span style={{ marginRight: 5 }}>帮助</span>
              <Badge text={'..'} style={{ height: '0.1rem', lineHeight: 0.1 }} />
            </Item>,
          ]}
          popupAlign={{
            overflow: { adjustY: 0, adjustX: 0 },
            offset: [20, 20],
          }}
          onVisibleChange={this.handleVisibleChange}
          onSelect={this.onSelect}
        >
          <span><Icon type="ellipsis" /></span>
        </Popover>
      }>NavBar</NavBar>
      {/* <p>选中了 {this.state.selected}</p> */}
      <div style={{ paddingTop: 140, paddingLeft: 130 }}>
        <Popover
          visible={this.state.visible1}
          overlay={[
            <Item key="0" value="0">添加朋友</Item>,
            <Item key="1" value="1">发起群聊</Item>,
            <Item key="2" value="2">扫一扫</Item>,
            <Item key="3" value="3">我的二维码</Item>,
          ]}
          popupAlign={{
            offset: [7, -14],
          }}
          placement="topRight"
          onVisibleChange={v => this.setState({ visible1: v })}
        >
          <a href="#">菜单</a>
        </Popover>
      </div>
    </div>);
  },
});

ReactDOM.render(<App />, mountNode);
````
