/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { Button, WingBlank, WhiteSpace, Flex, List } from '../../index.js';

const ButtonExample = React.createClass({
  render() {
    return (
      <Page title="按钮" subtitle="&lt;Button mode='blue' size='tiny' onClick={() => {}}/&gt;">
        <WhiteSpace/>
        <WingBlank>
          <Button onClick={(e) => {console.log('onChange'); console.log(e);}}>主按钮</Button>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank>
          <Button
            disabled={true}
            onClick={(e) => {console.log('onChange'); console.log(e);}}
          >不可点按钮</Button>
        </WingBlank>
        <WhiteSpace mode={20}/>
        <WingBlank>
          <Button
            mode="white"
            onClick={(e) => {console.log('onChange'); console.log(e);}}
          >次按钮</Button>
        </WingBlank>
        <WhiteSpace mode={20}/>
        <WingBlank>
          <Button
            mode="red"
            onClick={(e) => {console.log('onChange'); console.log(e);}}
          >红色按钮</Button>
        </WingBlank>
        <WhiteSpace mode={20}/>
        <WingBlank>
          <Button
            mode="light"
            onClick={(e) => {console.log('onChange'); console.log(e);}}
          >轻按钮</Button>
        </WingBlank>
        <WhiteSpace mode={20}/>
        <Button
          mode="warn"
          onClick={(e) => {console.log('onChange'); console.log(e);}}
        >警示按钮</Button>
        <WhiteSpace/>
        <Button
          disabled={true}
          mode="warn"
          onClick={(e) => {console.log('onChange'); console.log(e);}}
        >警示按钮不可点</Button>
        <WhiteSpace/>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button
                size="middle"
                onClick={(e) => {alert('点击了按钮'); console.log(e);}}
              >large主按钮</Button>
            </Flex.Item>
            <Flex.Item>
              <Button
                mode="light"
                onClick={(e) => {alert('点击了按钮'); console.log(e);}}
              >large次按钮</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button
                size="middle"
                onClick={(e) => {alert('点击了按钮'); console.log(e);}}
              >middle主按钮</Button>
            </Flex.Item>
            <Flex.Item>
              <Button
                mode="light"
                size="middle"
                onClick={(e) => {alert('点击了按钮'); console.log(e);}}
              >middle次按钮</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>

        <WhiteSpace/>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button
                size="small"
                onClick={(e) => {alert('点击了按钮'); console.log(e);}}
              >small主按钮</Button>
            </Flex.Item>
            <Flex.Item>
              <Button
                mode="light"
                size="small"
                onClick={(e) => {alert('点击了按钮'); console.log(e);}}
              >small次按钮</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button
                size="little"
                onClick={(e) => {alert('点击了按钮'); console.log(e);}}
              >little主按钮</Button>
            </Flex.Item>
            <Flex.Item>
              <Button
                mode="light"
                size="little"
                onClick={(e) => {alert('点击了按钮'); console.log(e);}}
              >little次按钮</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button
                size="tiny"
                onClick={(e) => {alert('点击了按钮'); console.log(e);}}
              >tiny主按钮</Button>
            </Flex.Item>
            <Flex.Item>
              <Button
                mode="light"
                size="tiny"
                onClick={(e) => {alert('点击了按钮'); console.log(e);}}
              >tiny次按钮</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace/>
        <WingBlank>
          <Button
            mode="light"
            size="tiny"
            inline={true}
            onClick={(e) => {alert('点击了按钮'); console.log(e);}}
          >行内按钮</Button>
        </WingBlank>
        <List >
          <List.Body>
            <List.Item
              line={2}
              needActive={false}
              extra={<Button mode="light" size="tiny" inline={true} onClick={(e) => {alert('点击了按钮'); console.log(e);}}>按钮</Button>}
            ><div><div className="am-list-title">区域经理</div><div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div></div>
            </List.Item>
          </List.Body>
        </List>
      </Page>
    );
  },
});

export default ButtonExample;
