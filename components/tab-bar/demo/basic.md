---
order: 0
title:
  zh-CN: 'APP 型选项卡'
  en-US: 'APP Tab Bar'
---

## zh-CN

多用于页面的内容区块，起着控制小范围内的大块内容的分组和隐藏，起着保持界面整洁的作用。

## en-US

Used for the content of the page block, control large content of a small range grouping and hidden, plays a role in keeping the interface clean and tidy.

````jsx
import { TabBar, Icon } from 'antd-mobile';

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          点击切换 tab-bar 显示/隐藏
        </a>
      </div>
    );
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="生活"
          key="生活"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'blueTab'}
          badge={1}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
          data-seed="logId"
        >
          {this.renderContent('生活')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon type="koubei-o" size="md" />}
          selectedIcon={<Icon type="koubei" size="md" />}
          title="口碑"
          key="口碑"
          badge={'new'}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}
          data-seed="logId1"
        >
          {this.renderContent('口碑')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
            />
          }
          title="朋友"
          key="朋友"
          dot
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
          }}
        >
          {this.renderContent('朋友')}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="我的"
          key="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
          }}
        >
          {this.renderContent('我的')}
        </TabBar.Item>
      </TabBar>
    );
  }
}

ReactDOM.render(<TabBarExample />, mountNode);
````

````css
#tab-bar.demo {
  display: flex;
  flex-direction: column;
}
#tab-bar .demoName {
  height: 40px;
}
#tab-bar .demo-preview-item,
#tab-bar .demo-preview-item .am-tab-bar {
  flex: 1;
  display: flex;
  flex-direction: column;
}
#tab-bar .demo-preview-item .am-tab-bar {
  background-color: white;
}

````
