---
order: 0
title: 基本使用
---


````jsx
import { SwipeAction, List } from 'antd-mobile';

const SwipeActionExample = React.createClass({
  getInitialState() {
    return {
      items: ['00', '01', '02', '03', '04', '05'],
    };
  },
  onDelete(value) {
    const tempArr = this.state.items;
    this.setState({
      items: tempArr.filter(v => v !== value),
    });
  },
  render() {
    return (
      <div>
        <List>
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
        </List>
        <div>
          <p style={{ padding: '0.16rem 0.32rem' }}>多个实例：</p>
          <List>
            {this.state.items.map((item, i) => <SwipeAction
              style={{ backgroundColor: 'gray' }}
              autoClose
              key={i}
              right={[
                {
                  text: `删除${item}`,
                  onPress: () => this.onDelete(item),
                  style: { backgroundColor: '#F4333C', color: 'white' },
                },
              ]}
            >
              <List.Item extra="更多" arrow="horizontal" >
                item {item}
              </List.Item>
            </SwipeAction>
          )}
          </List>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<SwipeActionExample />, mountNode);
````
