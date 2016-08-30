---
order: 0
title: 基本使用
---


````jsx
import { SwipeAction, List } from 'antd-mobile';

const SwipeActionExample = React.createClass({
  render() {
    return (
      <List>
        <List.Body>
          <SwipeAction
            style={{ backgroundColor: 'gray' }}
            autoClose
            right={[
              {
                text: '取消',
                onPress: () => console.log('取消'),
                style: { backgroundColor: '#ccc', color: 'white' },
              },
              {
                text: '删除',
                onPress: () => console.log('删除'),
                style: { backgroundColor: '#FE7A38', color: 'white' },
              },
            ]}
            left={[
              {
                text: '回复',
                onPress: () => console.log('查找'),
                style: { backgroundColor: '#2DB7F5', color: 'white' },
              },
              {
                text: '取消',
                onPress: () => console.log('取消'),
                style: { backgroundColor: '#ccc', color: 'white' },
              },
            ]}
            onOpen={() => console.log('global open')}
            onClose={() => console.log('global close')}
          >
            <List.Item
              extra="更多"
              arrow="horizontal"
            >
                左右都可操作
            </List.Item>
          </SwipeAction>
        </List.Body>
      </List>
    );
  },
});

ReactDOM.render(<SwipeActionExample />, mountNode);
````
