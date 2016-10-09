---
order: 4
title: 事件 onChange/onValueChange
---

````jsx
import { SegmentedControl, WhiteSpace, WingBlank } from 'antd-mobile';

const SegmentedControlExample = React.createClass({
  onChange(e) {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  },
  onValueChange(value) {
    console.log(value);
  },
  render() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <SegmentedControl
          values={['切换一', '切换二', '切换三']}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
        <WhiteSpace size="lg" />
      </WingBlank>
    );
  },
});

ReactDOM.render(<SegmentedControlExample />, mountNode);
````
