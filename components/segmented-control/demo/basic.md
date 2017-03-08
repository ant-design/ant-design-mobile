---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

````jsx
import { SegmentedControl, WingBlank } from 'antd-mobile';

class SegmentedControlExample extends React.Component {
  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }
  onValueChange = (value) => {
    console.log(value);
  }
  render() {
    return (
      <WingBlank size="lg" className="sc-example">
        <p className="sub-title">最简</p>
        <SegmentedControl values={['切换一', '切换二']} />

        <p className="sub-title">禁用</p>
        <SegmentedControl values={['切换一', '切换二']} disabled />

        <p className="sub-title">默认选中一项</p>
        <SegmentedControl selectedIndex={1} values={['切换一', '切换二', '切换三']} />

        <p className="sub-title">主色调样式 tintColor</p>
        <SegmentedControl
          values={['切换一', '切换二', '切换三']}
          tintColor={'#ff0000'}
          style={{ height: '0.8rem', width: '5rem' }}
        />

        <p className="sub-title">事件</p>
        <SegmentedControl
          values={['切换一', '切换二', '切换三']}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
      </WingBlank>
    );
  }
}

ReactDOM.render(<SegmentedControlExample />, mountNode);
````
````css
.sc-example {
  padding-bottom: 0.26rem;
}
.sub-title {
  color: #888;
  font-size: 28px;
  padding: 30px 0 18px 0;
}
````
