/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { Button, WingBlank, WhiteSpace, Flex, List } from 'antm';

const ButtonExample = React.createClass({
  getInitialState() {
    return {
      dark: false,
    };
  },
  render() {
    return (
      <Page title="按钮" subtitle="&lt;Button size='small' onClick={() => {}}/&gt;"
        style={{ backgroundColor: this.state.dark ? 'black' : 'white' }}
      >
        <WingBlank>
          <Button type="primary" size="small" inline
            onClick={() => { this.setState({ dark: !this.state.dark }); }}
          >{`点击切换：${this.state.dark ? '白天模式' : '夜间模式'}`}</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary">primary按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" disabled>primary disabled 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" ghost>primary ghost 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button>default 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button ghost>default ghost 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button ghost disabled>default ghost disabled 按钮</Button>
        </WingBlank>
        <WhiteSpace mode={20} />
        <Button type="warning">warning按钮</Button>
        <WhiteSpace />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button type="primary" size="small">primary small 按钮</Button>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary" size="small" disabled>primary small disabled 按钮</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button size="small">default small 按钮</Button>
            </Flex.Item>
            <Flex.Item>
              <Button size="small" disabled>default small 按钮</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button size="large" inline>inline 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <List>
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
