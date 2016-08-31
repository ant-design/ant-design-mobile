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
    </div>);
  },
});

ReactDOM.render(<App />, mountNode);
````
