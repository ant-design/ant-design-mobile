---
order: 0
title: Popover
---


````jsx
/* eslint global-require: 0 */
import { Popover, NavBar, Icon } from 'antd-mobile';

const Item = Popover.Item;

const App = React.createClass({
  getInitialState() {
    return {
      visible: false,
      selected: '',
    };
  },
  onSelect(opt) {
    // console.log(opt.props.value);
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
      <NavBar iconName={false} mode="light" rightContent={
        <Popover
          visible={this.state.visible}
          overlay={[
            (<Item key="4" value="scan" icon={<Icon type={require('./scan.svg')} />} data-seed="logId">扫一扫</Item>),
            (<Item key="5" value="special" icon={<Icon type={require('./qrcode.svg')} />} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
            (<Item key="6" value="button ct" icon={<Icon type={require('./help.svg')} />}>
              <span style={{ marginRight: 5 }}>帮助</span>
            </Item>),
          ]}
          popupAlign={{
            overflow: { adjustY: 0, adjustX: 0 },
            offset: [-2, 15],
          }}
          onVisibleChange={this.handleVisibleChange}
          onSelect={this.onSelect}
        >
          <div style={{
            height: '100%',
            padding: '0 0.3rem',
            marginRight: '-0.3rem',
            display: 'flex',
            alignItems: 'center',
          }}
          >
            <Icon type="ellipsis" />
          </div>
        </Popover>
      }
      >
        NavBar
      </NavBar>
    </div>);
  },
});

ReactDOM.render(<App />, mountNode);
````
