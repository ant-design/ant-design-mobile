---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---


````jsx
import { SwipeAction, List } from 'antd-mobile';

const SwipeActionExample = () => (
  <List>
    <SwipeAction
      style={{ backgroundColor: 'gray' }}
      autoClose
      right={[
        {
          text: 'Cancel',
          onPress: () => console.log('cancel'),
          style: { backgroundColor: '#ddd', color: 'white' },
        },
        {
          text: 'Delete',
          onPress: () => console.log('delete'),
          style: { backgroundColor: '#F4333C', color: 'white' },
        },
      ]}
      left={[
        {
          text: 'Reply',
          onPress: () => console.log('reply'),
          style: { backgroundColor: '#108ee9', color: 'white' },
        },
        {
          text: 'Cancel',
          onPress: () => console.log('cancel'),
          style: { backgroundColor: '#ddd', color: 'white' },
        },
      ]}
      onOpen={() => console.log('global open')}
      onClose={() => console.log('global close')}
    >
      <List.Item
        extra="More"
        arrow="horizontal"
        onClick={e => console.log(e)}
      >
        Have left and right buttons
      </List.Item>
    </SwipeAction>
    <SwipeAction
      style={{ backgroundColor: 'gray' }}
      autoClose
      left={[
        {
          text: 'Reply',
          onPress: () => console.log('reply'),
          style: { backgroundColor: '#108ee9', color: 'white' },
        },
        {
          text: 'Cancel',
          onPress: () => console.log('cancel'),
          style: { backgroundColor: '#ddd', color: 'white' },
        },
      ]}
      onOpen={() => console.log('global open')}
      onClose={() => console.log('global close')}
    >
      <List.Item
        extra="More"
        arrow="horizontal"
        onClick={e => console.log(e)}
      >
        Only left buttons
      </List.Item>
    </SwipeAction>
    <SwipeAction
      style={{ backgroundColor: 'gray' }}
      autoClose
      right={[
        {
          text: 'Cancel',
          onPress: () => console.log('cancel'),
          style: { backgroundColor: '#ddd', color: 'white' },
        },
        {
          text: 'Delete',
          onPress: () => console.log('delete'),
          style: { backgroundColor: '#F4333C', color: 'white' },
        },
      ]}
      onOpen={() => console.log('global open')}
      onClose={() => console.log('global close')}
    >
      <List.Item
        extra="More"
        arrow="horizontal"
        onClick={e => console.log(e)}
      >
        Only right buttons
      </List.Item>
    </SwipeAction>
    <SwipeAction
      style={{ backgroundColor: 'gray' }}
      autoClose
      right={[
        {
          text: 'short',
          onPress: () => console.log('cancel'),
          style: { backgroundColor: '#ddd', color: 'white' },
        },
        {
          text: 'long text',
          onPress: () => console.log('delete'),
          style: { backgroundColor: '#F4333C', color: 'white' },
        },
      ]}
      onOpen={() => console.log('global open')}
      onClose={() => console.log('global close')}
    >
      <List.Item
        extra="More"
        arrow="horizontal"
        onClick={e => console.log(e)}
      >
        Different button width
      </List.Item>
    </SwipeAction>
    <SwipeAction
      style={{ backgroundColor: 'gray' }}
      autoClose
      right={[
        {
          text: 'button1',
          onPress: () => console.log('cancel'),
          style: { backgroundColor: '#ddd', color: 'white' },
        },
        {
          text: 'button2',
          onPress: () => console.log('delete'),
          style: { backgroundColor: '#F4333C', color: 'white' },
        },
      ]}
      onOpen={() => console.log('global open')}
      onClose={() => console.log('global close')}
    >
      <List.Item
        extra="More"
        arrow="horizontal"
        onClick={() => console.log('List.Item clicked!')}
      >
        List.Item with onClick
      </List.Item>
    </SwipeAction>
  </List>
);

ReactDOM.render(<SwipeActionExample />, mountNode);
````
