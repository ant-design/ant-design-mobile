import React from 'react';
import { View, Text } from 'react-native';
import { TabBar } from 'antd-mobile';

export default class BasicTabBarExample extends React.Component <any, any> {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,
    };
  }

  renderContent(pageText, num?: number) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
        <Text style={{ margin: 50 }}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#ccc"
      >
        <TabBar.Item
          title="生活"
          icon={require('./alipay.png')}
          selectedIcon={require('./alipay_sel.png')}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          {this.renderContent('生活 Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={require('./koubei.png')}
          selectedIcon={require('./koubei_sel.png')}
          title="口碑"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this.renderContent('口碑 Tab', this.state.notifCount)}
        </TabBar.Item>
        <TabBar.Item
          icon={require('./friend.png')}
          selectedIcon={require('./friend_sel.png')}
          title="朋友"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              presses: this.state.presses + 1,
            });
          }}>
          {this.renderContent('朋友 Tab', this.state.presses)}
        </TabBar.Item>
        <TabBar.Item
          icon={require('./busi.png')}
          selectedIcon={require('./busi_sel.png')}
          title="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
              presses: this.state.presses + 1,
            });
          }}>
          {this.renderContent('我的 Tab', this.state.presses)}
        </TabBar.Item>
      </TabBar>
    );
  }

}
