---
order: 0
title: 基本使用
---


````__react
import { SwipeAction, List } from 'antd-mobile';

const SwipeActionExample = React.createClass({
  render() {
    return (
        <SwipeAction
          style={{ backgroundColor: 'gray' }}
          autoClose
          right={[
            {
              text: '取消',
              onPress: () => console.log('取消'),
              style: { backgroundColor: '#ddd', color: 'white' },
            },
            {
              text: '删除',
              onPress: () => console.log('删除'),
              style: { backgroundColor: '#F4333C', color: 'white' },
            },
          ]}
          left={[
            {
              text: '回复',
              onPress: () => console.log('回复'),
              style: { backgroundColor: '#108ee9', color: 'white' },
            },
            {
              text: '取消',
              onPress: () => console.log('取消'),
              style: { backgroundColor: '#ddd', color: 'white' },
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
    );
  },
});

ReactDOM.render(<SwipeActionExample />, mountNode);
````
