---
order: 0
title: 基本
---

Tab

---

````jsx
import { Tab } from 'antm';
let TabExample = React.createClass({
  getInitialState() {
    return { selectedTab: 'tab1' };
  },
  render() {
    return (<Tab>
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
    );
  }
});

ReactDOM.render(<TabExample />, document.getElementById('components-tab-demo-basic'));
````
