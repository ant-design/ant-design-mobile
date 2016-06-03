---
order: 0
title: 基本使用
---


````jsx
import { ListAction, List } from 'antm';

let TabExample = React.createClass({
  render() {
    return (
      <List>
        <List.Body>
          <ListAction
            style={{ backgroundColor: 'gray' }}
            right={[
              {
                text: 'more',
                onPress: () => console.log('more'),
                style: { backgroundColor: 'orange', color: 'white' },
              },
              {
                text: 'delete',
                onPress: () => console.log('删除'),
                style: { backgroundColor: 'red', color: 'white' },
              },
            ]}
            left={[
              {
                text: '阅读',
                onPress: () => console.log('阅读'),
                style: { backgroundColor: 'blue', color: 'white' }
              },
              {
                text: '回复',
                onPress: () => console.log('回复'),
                style: { backgroundColor: 'green', color: 'white' },
              },
            ]}
            onOpen={ () => console.log('open') }
            onClose={ () => console.log('close') }
          >
            <List.Item extra="额外参数">
                简单例子 - 左右都可操作
            </List.Item>
          </ListAction>
        </List.Body>
      </List>
    );
  }
});

ReactDOM.render(<TabExample />, mountNode);
````
