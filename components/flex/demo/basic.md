---
order: 0
title: 基本
---



````jsx
import { Flex, Button, WingBlank, WhiteSpace } from 'antm';


let FlexExample = React.createClass({
  render() {
    return (
      <div className="button-container">
        <WhiteSpace />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button>2列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary">2列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button size="small">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary" size="small">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button>4列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary">4列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button>4列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary">4列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button size="small">5列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary">5列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small">5列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary">5列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary">5列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
      </div>
    );
  }
});

ReactDOM.render(<FlexExample />, mountNode);
````
