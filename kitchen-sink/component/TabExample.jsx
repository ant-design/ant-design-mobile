import React from 'react';
import Page from '../common/Page';
import { Tabs, WhiteSpace } from 'antm';

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
      <Page title="选项卡" subtitle="&lt;Tabs&gt;&lt;Tabs.Item selected={true} /&gt;&lt;Tabs.Item /&gt;&lt;/Tabs&gt;">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
          <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
          <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
        </Tabs>
        <WhiteSpace />
        {/*<Tabs defaultActiveKey="1" size="small" onChange={callback}>
         <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
         <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
         <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
         </Tabs>
         <WhiteSpace />*/}
        <Tabs defaultActiveKey="1" type="capsule" onChange={callback}>
          <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
          <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
          <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
        </Tabs>
        <WhiteSpace />
        {/*<Tabs defaultActiveKey="1" type="capsule" size="small" onChange={callback}>
         <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
         <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
         <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
         </Tabs>*/}
      </Page>
    );
  },
});

export default TabExample;
