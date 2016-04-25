import React from 'react';
import Page from '../common/Page';
import { Flex, Button, WingBlank, WhiteSpace } from 'antm';

const FlexExample = React.createClass({
  render() {
    return (
      <Page title="Flex布局" subtitle="&lt;Flex&gt;&lt;Flex.Item /&gt;&lt;Flex.Item /&gt;&lt;/Flex&gt;">
        <WhiteSpace />
        <WingBlank>
          <Flex>
            <Flex.Item onClick={(e) => {console.log(e);}}>
              <Button>2列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white">2列</Button>
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
              <Button mode="white" size="small">3列</Button>
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
              <Button size="small">4列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white" size="small">4列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small">4列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white" size="small">4列</Button>
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
              <Button mode="white" size="small">5列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small">5列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white" size="small">5列</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white" size="small">5列</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
      </Page>
    );
  },
});

export default FlexExample;
