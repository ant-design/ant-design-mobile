import List from 'antd-mobile/lib/list'

const noop = () => { }

const list = () => (
  <List
    style={{ testID: 'list' }}
    onLayout={noop}
    onTouchEnd={noop}
  >
    <List.Item
      style={{ backfaceVisibility: 'hidden' }}
      onClick={noop}
      onPressIn={noop}
    >
      <List.Item.Brief
        style={{ color: 'red' }}
      >
      </List.Item.Brief>
    </List.Item>
  </List>
)
