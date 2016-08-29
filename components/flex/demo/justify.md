---
order: 3
title: 主轴对齐方式
---

justify="start/end/center/between/around"

````jsx
import { Flex, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';

const FlexExample = React.createClass({
  render() {
    return (
      <div className="flex-container">
        <WhiteSpace />
        <List title="start(默认): 左对齐" />
        <WingBlank size={28}>
          <Flex
            className="flex-container-justify"
          >
            <Button size="small" type="primary">按钮1</Button>
            <Button size="small">按钮2</Button>
            <Button size="small" type="primary">按钮3</Button>
          </Flex>
        </WingBlank>
        <List>
          <List.Header>end:右对齐</List.Header>
        </List>
        <WingBlank size={28}>
          <Flex
            justify="end"
            className="flex-container-justify"
          >
            <Button size="small" type="primary">按钮1</Button>
            <Button size="small">按钮2</Button>
            <Button size="small" type="primary">按钮3</Button>
          </Flex>
        </WingBlank>
        <List>
          <List.Header>center:居中</List.Header>
        </List>
        <WingBlank size={28}>
          <Flex
            justify="center"
            className="flex-container-justify"
          >
            <Button size="small" type="primary">按钮1</Button>
            <Button size="small">按钮2</Button>
            <Button size="small" type="primary">按钮3</Button>
          </Flex>
        </WingBlank>
        <List>
          <List.Header>between:两端对齐，项目之间的间隔都相等</List.Header>
        </List>
        <WingBlank size={28}>
          <Flex
            justify="between"
            className="flex-container-justify"
          >
            <Button size="small" type="primary">按钮1</Button>
            <Button size="small">按钮2</Button>
            <Button size="small" type="primary">按钮3</Button>
          </Flex>
        </WingBlank>
        <List>
          <List.Header>around:每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</List.Header>
        </List>
        <WingBlank size={28}>
          <Flex
            justify="around"
            className="flex-container-justify"
          >
            <Button size="small" type="primary">按钮1</Button>
            <Button size="small">按钮2</Button>
            <Button size="small" type="primary">按钮3</Button>
          </Flex>
        </WingBlank>
      </div>
    );
  },
});

ReactDOM.render(<FlexExample />, mountNode);
````

````css
.flex-container {
  background: #f5f5f9;
}
.flex-container-justify button {
   margin-right: 0.18rem;
   margin-bottom: 0.18rem;
   width: 1.4rem;
}

.flex-container-justify button:last-child {
  margin-right: 0;
}

````
