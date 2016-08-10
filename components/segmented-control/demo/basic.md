---
order: 0
title: 分段控制
---

````jsx
import { SegmentedControl, WhiteSpace } from 'antd-mobile';
console.log(SegmentedControl);
let SegmentedControlExample = React.createClass({
  getInitialState() {
    return { selectedIndex: 1 };
  },
  onChange(e) {
    this.setState({
      selectedIndex: e.nativeEvent.selectedSegmentIndex,
    });
  },
  onValueChange(value) {
    console.log(value);
  },
  render() {
    return (<div style={{ padding: 16 }}>
      <div>禁用/enabled=false</div>
      <SegmentedControl
        values={['切换一', '切换二']}
        enabled={false}
      />
      <WhiteSpace size={20} />
      <div>设置 tintColor </div>
      <SegmentedControl
        values={['切换一', '切换二', '切换三']}
        tintColor={'#ff0000'}
      />
      <WhiteSpace size={20} />
      <div>事件 onChange/onValueChange </div>
      <SegmentedControl
        selectedIndex={this.state.selectedIndex}
        values={['切换一', '切换二', '切换三']}
        onChange={this.onChange}
        onValueChange={this.onValueChange}
      />
    </div>);
  },
});

ReactDOM.render(<SegmentedControlExample />, mountNode);
````
