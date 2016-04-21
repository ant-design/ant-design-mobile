import React from 'react';
import Page from '../common/Page';
import { Tab } from 'antm';

const TabExample = React.createClass({
  getInitialState(){
    return { selectedTab: 'tab1' };
  },
  render() {
    return (
      <Page title="选项卡" subtitle="&lt;Tab&gt;&lt;Tab.Item selected={true} /&gt;&lt;Tab.Item /&gt;&lt;/Tab&gt;">
        <Tab>
          <Tab.Item
            selected={this.state.selectedTab === 'tab1'}
            onClick={() => {
              this.setState({
                selectedTab: 'tab1',
              });
            }}
          >选项1</Tab.Item>
          <Tab.Item
            selected={this.state.selectedTab === 'tab2'}
            onClick={() => {
              this.setState({
                selectedTab: 'tab2',
              });
            }}
          >选项2</Tab.Item>
          <Tab.Item
            selected={this.state.selectedTab === 'tab3'}
            onClick={() => {
              this.setState({
                selectedTab: 'tab3',
              });
            }}
          >选项3</Tab.Item>
        </Tab>
      </Page>
    );
  },
});

export default TabExample;
