---
order: 0
title: APP型选项卡
---

多用于页面的内容区块，起着控制小范围内的大块内容的分组和隐藏，起着保持界面整洁的作用。

````jsx
/* tslint:disable:no-var-requires */
import { TabBar } from 'antd-mobile';

const base64Icon = '';

let TabExample = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,
    };
  },
  renderContent(color, pageText, num?: number) {
    return (
      <div style={{ flex: 1, alignItems: 'center', backgroundColor: color }}>
        <div style={{ color: 'white', margin: 50 }}>{pageText}</div>
        <div style={{ color: 'white', margin: 50 }}>{num} re-renders of the {pageText}</div>
      </div>
    );
  },
  render() {
    return (
      <div>
        <TabBar
          unselectedTintColor="yellow"
          tintColor="white"
          barTintColor="darkslateblue"
        >
          <TabBar.Item
            title="Blue Tab"
            icon={{ uri: base64Icon, scale: 3 }}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
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
            }}
          >
            {this.renderContent('#783E33', 'Red Tab', this.state.notifCount)}
          </TabBar.Item>
          <TabBar.Item
            icon={require('./flux.png')}
            selectedIcon={require('./relay.png')}
            renderAsOriginal
            title="More"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
                presses: this.state.presses + 1,
              });
            }}
          >
            {this.renderContent('#21551C', 'Green Tab', this.state.presses)}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  },
});

ReactDOM.render(<TabExample />, mountNode);
````
