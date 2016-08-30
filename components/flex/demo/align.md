---
order: 4
title: 交叉轴对齐方式
---

align="start/end/center/baseline/stretch"

````jsx
import { Flex, Button, List, WingBlank, WhiteSpace } from 'antd-mobile';


const FlexExample = React.createClass({
  render() {
    return (
      <div className="flex-container">
        <WhiteSpace />
        <WingBlank size="lg">
          <List title="start:交叉轴的起点对齐" />
          <Flex align="start" className="flex-align-container">
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button inline size="small">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank size="lg">
          <List>
            <List.Header>end:交叉轴的终点对齐</List.Header>
          </List>
          <Flex align="end" className="flex-align-container">
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button inline size="small">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank size="lg">
          <List>
            <List.Header>center(默认):交叉轴的中点对齐</List.Header>
          </List>
          <Flex align="center" className="flex-align-container">
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button inline size="small">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button inline size="small">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank size="lg">
          <List>
            <List.Header>baseline:项目的第一行文字的基线对齐</List.Header>
          </List>
          <Flex align="baseline" className="flex-align-container">
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button inline size="small">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button inline size="small">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank size="lg">
          <List>
            <List.Header>stretch:如果项目未设置高度或设为auto，将占满整个容器的高度</List.Header>
          </List>
          <Flex align="stretch" className="flex-align-container" style={{ border: '1px solid red' }}>
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button inline size="small">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button inline size="small">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
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
.flex-align-container button {
  width: 100%;
}
.flex-align-container * {
  box-sizing: border-box;
}

````
