---
order: 3
title: 主轴对齐方式
---

justify="start/end/center/between/around"

````jsx
import { Flex, List, Button, WhiteSpace } from 'antd-mobile';

let FlexExample = React.createClass({
  render() {
    return (
      <div className="button-container">
        <WhiteSpace />
        <List title="start(默认): 左对齐" />
        <Flex>
          <Button size="small" type="primary" style={{ width: '140px', margin: '8px' }}>按钮1</Button>
          <Button size="small" style={{ width: '140px', margin: '8px' }}>按钮2</Button>
          <Button size="small" type="primary" style={{ width: '140px', margin: '8px' }}>按钮3</Button>
        </Flex>
        <List>
          <List.Header>end:右对齐</List.Header>
        </List>
        <Flex
          justify="end"
        >
          <Button size="small" type="primary" style={{ width: '140px', margin: '8px' }}>按钮1</Button>
          <Button size="small" style={{ width: '140px', margin: '8px' }}>按钮2</Button>
          <Button size="small" type="primary" style={{ width: '140px', margin: '8px' }}>按钮3</Button>
        </Flex>
        <List>
          <List.Header>center:居中</List.Header>
        </List>
        <Flex
          justify="center"
        >
          <Button size="small" type="primary" style={{ width: '140px', margin: '8px' }}>按钮1</Button>
          <Button size="small" style={{ width: '140px', margin: '8px' }}>按钮2</Button>
          <Button size="small" type="primary" style={{ width: '140px', margin: '8px' }}>按钮3</Button>
        </Flex>
        <List>
          <List.Header>between:两端对齐，项目之间的间隔都相等</List.Header>
        </List>
        <Flex
          justify="between"
        >
          <Button size="small" type="primary" style={{ width: '140px', margin: '8px' }}>按钮1</Button>
          <Button size="small" style={{ width: '140px', margin: '8px' }}>按钮2</Button>
          <Button size="small" type="primary" style={{ width: '140px', margin: '8px' }}>按钮3</Button>
        </Flex>
        <List>
          <List.Header>around:每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</List.Header>
        </List>
        <Flex
          justify="around"
        >
          <Button size="small" type="primary" style={{ width: '140px', margin: '8px' }}>按钮1</Button>
          <Button size="small" style={{ width: '140px', margin: '8px' }}>按钮2</Button>
          <Button size="small" type="primary" style={{ width: '140px', margin: '8px' }}>按钮3</Button>
        </Flex>
      </div>
    );
  },
});

ReactDOM.render(<FlexExample />, mountNode);
````
