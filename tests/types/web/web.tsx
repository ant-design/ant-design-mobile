import List from 'antd-mobile/lib/list'

const noop = () => { }

const list = () => (
  <List
    style={{ zIndex: 1 }}
    onClick={noop}
  >
    <List.Item
      wrap='soft'
      onDrag={noop}
    >
      <List.Item.Brief
        style={{ color: 'red' }}
      >
      </List.Item.Brief>
    </List.Item>
  </List>
)
