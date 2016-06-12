---
order: 4
title: 交叉轴对齐方式
----------------



````jsx
import { Flex, Button, List, WingBlank, WhiteSpace } from 'antm';


let FlexExample = React.createClass({
  render() {
    return (
      <div className="button-container">
        <WhiteSpace />
        <WingBlank>
          <List>
            <List.Header>start:交叉轴的起点对齐</List.Header>
          </List>
          <Flex align="start">
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <List>
            <List.Header>end:交叉轴的终点对齐</List.Header>
          </List>
          <Flex align="end">
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <List>
            <List.Header>center(默认):交叉轴的中点对齐</List.Header>
          </List>
          <Flex align="center">
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <List>
            <List.Header>baseline:项目的第一行文字的基线对齐</List.Header>
          </List>
          <Flex align="baseline">
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <List>
            <List.Header>stretch:如果项目未设置高度或设为auto，将占满整个容器的高度</List.Header>
          </List>
          <Flex align="stretch">
            <Flex.Item style={{ border: '1px solid red' }}>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item style={{ border: '1px solid red' }}>
              <Button size="small">3列</Button>
            </Flex.Item>
            <Flex.Item style={{ border: '1px solid red' }}>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item style={{ border: '1px solid red' }}>
              <Button size="small">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
      </div>
    );
  }
});

ReactDOM.render(<FlexExample />, mountNode);
````
