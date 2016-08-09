---
order: 0
title: 分段控制
---

````jsx
import { SegmentedControl, WhiteSpace } from 'antd-mobile';
console.log(SegmentedControl);
let SegmentedControlExample = React.createClass({
  getInitialState() {
    return { selectedIndex: 0 };
  },
  onChange(index) {
    this.setState({
      selectedIndex: index,
    });
  },
  render() {
    return (<div>
      <SegmentedControl
        selectedIndex={this.state.selectedIndex}
        values={['切换一', '切换二']}
        onChange={this.onChange}
      />
      <WhiteSpace size={20} />
      <SegmentedControl
        selectedIndex={this.state.selectedIndex}
        values={['切换一', '切换二', '切换三']}
        onChange={this.onChange}
      />
      <WhiteSpace size={20} />
      <SegmentedControl
        selectedIndex={this.state.selectedIndex}
        values={['切换一', '切换二', '切换三']}
        onChange={this.onChange}
      />
      <WhiteSpace size={20} />
      <SegmentedControl
        selectedIndex={this.state.selectedIndex}
        values={['切换一', '切换二', '切换三']}
        onChange={this.onChange}
      />
    </div>);
  },
});

ReactDOM.render(<SegmentedControlExample />, mountNode);
````
