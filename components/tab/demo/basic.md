# 基本

- order: 0

Tab，`line`默认为1。

---

````jsx
import {Tab, TabItem} from 'antm';
let TabExample = React.createClass({
  getInitialState(){
    return { selectedTab: 'tab1' };
  },
  render() {
    return (<Tab>
      <TabItem
        selected={this.state.selectedTab === 'tab1'}
        onClick={() => {
          this.setState({
            selectedTab: 'tab1',
          });
        }}
      >选项1</TabItem>
      <TabItem
        selected={this.state.selectedTab === 'tab2'}
        onClick={() => {
          this.setState({
            selectedTab: 'tab2',
          });
        }}
      >选项2</TabItem>
      <TabItem
        selected={this.state.selectedTab === 'tab3'}
        onClick={() => {
          this.setState({
            selectedTab: 'tab3',
          });
        }}
      >选项3</TabItem>
    </Tab>
    );
  }
});

ReactDOM.render(<TabExample />, document.getElementById('components-tab-demo-basic'));
````
