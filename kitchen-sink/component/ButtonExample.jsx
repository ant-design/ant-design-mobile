/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { Button, WingBlank, WhiteSpace, Flex, List } from 'antm';

const ButtonExample = React.createClass({
  render() {
    return (
      <Page title="按钮" subtitle="&lt;Button size='small' onClick={() => {}}/&gt;">
        <WhiteSpace />
        <WingBlank>
          <Button type="primary">primary按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" ghost>primary ghost 按钮</Button>
        </WingBlank>
        <WhiteSpace mode={20} />
        <WingBlank>
          <Button>default 按钮</Button>
        </WingBlank>
        <WhiteSpace mode={20} />
        <WingBlank>
          <Button ghost>default ghost 按钮</Button>
        </WingBlank>
        <WhiteSpace mode={20} />
        <Button type="warning">warning按钮</Button>
        <WhiteSpace />
        <Button type="primary" disabled>primary 按钮</Button>
        <WhiteSpace />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button type="primary">primary 按钮</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary" disabled>primary 按钮</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button size="small">primary 按钮</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small" disabled>primary 按钮</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button size="small">primary 按钮</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small" disabled>primary 按钮</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button size="small">primary 按钮</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small" disabled>primary 按钮</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button size="large" inline>inline 按钮</Button>
        </WingBlank>
        <List >
          <List.Body>
            <List.Item line={2} needActive={false}
              extra={<Button size="small" inline>按钮</Button>}
            >
              <div className="am-list-title">区域经理</div>
              <div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div>
            </List.Item>
          </List.Body>
        </List>
      </Page>
    );
  },
});

export default ButtonExample;
