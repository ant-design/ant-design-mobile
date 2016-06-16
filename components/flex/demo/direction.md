---
order: 1
title: 排列方向
---

direction="row/row-reverse/column/column-reverse"

````jsx
import { Flex, List, Button, WhiteSpace } from 'antm';

let FlexExample = React.createClass({
  render() {
    return (
      <div className="button-container">
        <WhiteSpace />
        <List>
          <List.Header>row:主轴为水平方向，起点在左端</List.Header>
        </List>
        <Flex>
          <Button size="small" type="primary" style={{ margin: '2px' }}>按钮1</Button>
          <Button size="small" style={{ margin: '2px' }}>按钮2</Button>
          <Button size="small" type="primary" style={{ margin: '2px' }}>按钮3</Button>
          <Button size="small" style={{ margin: '2px' }}>按钮4</Button>
        </Flex>
        <List>
          <List.Header>row-reverse:主轴为水平方向，起点在右端</List.Header>
        </List>
        <Flex
          direction="row-reverse"
        >
          <Button size="small" type="primary" style={{ margin: '2px' }}>按钮1</Button>
          <Button size="small" style={{ margin: '2px' }}>按钮2</Button>
          <Button size="small" type="primary" style={{ margin: '2px' }}>按钮3</Button>
          <Button size="small" style={{ margin: '2px' }}>按钮4</Button>
        </Flex>
        <List>
          <List.Header>column:主轴为垂直方向，起点在上沿</List.Header>
        </List>
        <Flex
          direction="column"
        >
          <Button size="small" type="primary" style={{ margin: '2px' }}>按钮1</Button>
          <Button size="small" style={{ margin: '2px' }}>按钮2</Button>
          <Button size="small" type="primary" style={{ margin: '2px' }}>按钮3</Button>
          <Button size="small" style={{ margin: '2px' }}>按钮4</Button>
        </Flex>
        <List>
          <List.Header>column-reverse:主轴为垂直方向，起点在下沿</List.Header>
        </List>
        <Flex
          direction="column-reverse"
        >
          <Button size="small" type="primary" style={{ margin: '2px' }}>按钮1</Button>
          <Button size="small" style={{ margin: '2px' }}>按钮2</Button>
          <Button size="small" type="primary" style={{ margin: '2px' }}>按钮3</Button>
          <Button size="small" style={{ margin: '2px' }}>按钮4</Button>
        </Flex>
        <WhiteSpace />
      </div>
    );
  }
});

ReactDOM.render(<FlexExample />, mountNode);
````
