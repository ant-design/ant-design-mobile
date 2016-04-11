---
order: 1
title: Flex对齐
---



````jsx
import { Flex, Button, WingBlank, WhiteSpace } from 'antm';


let FlexExample = React.createClass({
  render() {
    return (
      <div className="button-container">
        <WhiteSpace/>
        <WingBlank>
          顶部对齐
          <Flex align="top">
            <Flex.Item>
              <Button>3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white" size="small">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="tiny">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank>
          居中对齐
          <Flex align="middle">
            <Flex.Item>
              <Button>3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white" size="small">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="tiny">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank>
          底部对齐
          <Flex align="bottom">
            <Flex.Item>
              <Button>3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white" size="small">3列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="tiny">3列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
      </div>
    );
  }
});

ReactDOM.render(<FlexExample />, document.getElementById('components-flex-demo-align'));
````
