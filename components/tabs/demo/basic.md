---
order: 0
title: 基本
---

Tabs

---

````jsx
import { Tabs } from 'antm';
let TabExample = React.createClass({
  getInitialState() {
    return { selectedTab: 'tab1' };
  },
  render() {
    return (<Tabs>
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
    );
  }
});

ReactDOM.render(<TabExample />, mountNode);
````
