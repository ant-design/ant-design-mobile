---
order: 0
title: 基本
---

基本,子元素FLex.Item,设置flex=1

````jsx
import { Flex, Button, WingBlank, WhiteSpace } from 'antd-mobile';


const FlexExample = React.createClass({
  render() {
    return (
      <div className="flex-container">
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Flex>
            <Flex.Item>
              <Button type="primary">2列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button>2列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Flex>
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button>3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Flex>
            <Flex.Item>
              <Button type="primary">4列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button>4列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary">4列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button>4列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Flex>
            <Flex.Item>
              <Button type="primary">5列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button>5列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary">5列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button>5列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary">5列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="lg" />
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
````
