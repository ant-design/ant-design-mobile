import List from 'antd-mobile/lib/list';

const noop = () => { };
const style = { color: 'silver' };

const list = () => (
  <List
    renderHeader={noop}
    renderFooter={noop}
    prefixCls=''
    onClick={noop}
  >
    <br />
    <List.Item
      align='top'
      disabled
      multipleLine
      thumb='//:0'
      extra='/'
      arrow=''
      wrap='soft'
      prefixCls=''
      activeStyle={style}
      error
      platform='cross'
      onTouchEnd={noop}
    >
      <br />
      <List.Item.Brief style={style}>
        <br />
      </List.Item.Brief>
    </List.Item>
  </List>
);
