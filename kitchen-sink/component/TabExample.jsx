import React from 'react';
import Page from '../common/Page';
import { Tabs, WhiteSpace, WingBlank } from 'antm';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const TabExample = React.createClass({
  getInitialState(){
    return { selectedTab: 'tab1' };
  },
  render() {
    return (
      <Page title="选项卡" subtitle="&lt;Tabs&gt;&lt;TabPane /&gt;&lt;TabPane /&gt;&lt;/Tabs&gt;">
        <WingBlank mode={20}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
            <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
            <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
          </Tabs>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={20}>
          <Tabs defaultActiveKey="1" type="capsule" onChange={callback}>
            <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
            <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
            <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
          </Tabs>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={20}>
          <Tabs defaultActiveKey="1" type="capsule" onChange={callback}>
            <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
            <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
            <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
            <TabPane tab="选项卡四" key="4">选项卡四内容</TabPane>
          </Tabs>
        </WingBlank>
      </Page>
    );
  },
});

export default TabExample;
