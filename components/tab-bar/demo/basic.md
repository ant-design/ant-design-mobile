---
order: 0
title: APP型选项卡
---

多用于页面的内容区块，起着控制小范围内的大块内容的分组和隐藏，起着保持界面整洁的作用。

````jsx
import { TabBar } from 'antd-mobile';

let TabBarExample = React.createClass({
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
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#ccc"
      >
        <TabBar.Item
          title="生活"
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/oeVevmOmdPsBYSK.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/azAQQgnhgzfERRp.png' }}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
        >
          {this.renderContent('#414A8C', '生活 Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/QAglGPbVUVEzLab.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/NXsJBFNYxNVIdkR.png' }}
          title="口碑"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}
        >
          {this.renderContent('#783E33', '口碑 Tab', this.state.notifCount)}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UGWsgiXJaYBYzgX.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/VepaJAclXLFGeDr.png' }}
          title="朋友"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              presses: this.state.presses + 1,
            });
          }}
        >
          {this.renderContent('#21551C', '朋友 Tab', this.state.presses)}
        </TabBar.Item>
      </TabBar>
    );
  },
});

ReactDOM.render(<TabBarExample />, mountNode);
````
