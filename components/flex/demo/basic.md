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
        <WhiteSpace/>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button>2列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white">2列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button size="small">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white" size="small">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button size="little">4列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white" size="little">4列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="little">4列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white" size="little">4列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button size="tiny">5列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white" size="tiny">5列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="tiny">5列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white" size="tiny">5列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white" size="tiny">5列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
      </div>
    );
  }
});

ReactDOM.render(<FlexExample />, document.getElementById('components-flex-demo-basic'));
````
