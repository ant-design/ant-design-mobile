import * as React from 'react';
import { View, Text } from 'react-native';
import { TabBar } from 'antd-mobile';

export default class BasicTabBarExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,
    };
  }

  renderContent(color, pageText, num?: number) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: color }}>
        <Text style={{ color: 'white', margin: 50 }}>{pageText}</Text>
        <Text style={{ color: 'white', margin: 50 }}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="yellow"
        tintColor="white"
        barTintColor="darkslateblue"
      >
        <TabBar.Item
          title="Blue Tab"
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          {this.renderContent('#414A8C', 'Blue Tab')}
        </TabBar.Item>
        <TabBar.Item
          systemIcon="history"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this.renderContent('#783E33', 'Red Tab', this.state.notifCount)}
        </TabBar.Item>
        <TabBar.Item
          renderAsOriginal
          title="More"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              presses: this.state.presses + 1,
            });
          }}>
          {this.renderContent('#21551C', 'Green Tab', this.state.presses)}
        </TabBar.Item>
      </TabBar>
    );
  }

}
