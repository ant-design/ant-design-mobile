import React from 'react';
import Page from '../common/Page';
import { Tabs } from 'antm';

const TabExample = React.createClass({
  getInitialState(){
    return { selectedTab: 'tab1' };
  },
  render() {
    return (
      <Page title="选项卡" subtitle="&lt;Tabs&gt;&lt;Tabs.Item selected={true} /&gt;&lt;Tabs.Item /&gt;&lt;/Tabs&gt;">
        <Tabs>
          <Tabs.Item
            selected={this.state.selectedTab === 'tab1'}
            onClick={() => {
              this.setState({
                selectedTab: 'tab1',
              });
            }}
          >选项1</Tabs.Item>
          <Tabs.Item
            selected={this.state.selectedTab === 'tab2'}
            onClick={() => {
              this.setState({
                selectedTab: 'tab2',
              });
            }}
          >选项2</Tabs.Item>
          <Tabs.Item
            selected={this.state.selectedTab === 'tab3'}
            onClick={() => {
              this.setState({
                selectedTab: 'tab3',
              });
            }}
          >选项3</Tabs.Item>
        </Tabs>
      </Page>
    );
  },
});

export default TabExample;
