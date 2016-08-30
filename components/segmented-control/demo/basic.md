---
order: 0
title: 分段控制
---

````jsx
import { SegmentedControl, WhiteSpace } from 'antd-mobile';

const SegmentedControlExample = React.createClass({
  onChange(e) {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  },
  onValueChange(value) {
    console.log(value);
  },
  render() {
    return (
      <div>
        <div style={{ padding: 16 }}>禁用/enabled=false</div>
        <SegmentedControl
          values={['切换一', '切换二']}
          enabled={false}
        />
        <WhiteSpace size="lg" />
        <div style={{ padding: 16 }}>设置 tintColor/style </div>
        <SegmentedControl
          values={['切换一', '切换二', '切换三']}
          tintColor={'#ff0000'}
          style={{ height: '0.8rem', width: '5rem' }}
        />
        <WhiteSpace size="lg" />
        <div style={{ padding: 16 }}>设置默认选中 selectedIndex </div>
        <SegmentedControl
          selectedIndex={1}
          values={['切换一', '切换二', '切换三']}
        />
        <WhiteSpace size="lg" />
        <div style={{ padding: 16 }}>事件 onChange/onValueChange </div>
        <SegmentedControl
          values={['切换一', '切换二', '切换三']}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
      </div>
    );
  },
});

ReactDOM.render(<SegmentedControlExample />, mountNode);
````
