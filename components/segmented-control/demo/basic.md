---
order: 0
title: 基本
---



````jsx
import { SegmentedControl, WhiteSpace } from 'antm';
let SegmentedControlExample = React.createClass({
  getInitialState() {
    return { selectedIndex: 0 };
  },
  _onChange(index) {
    this.setState({
      selectedIndex: index
    });
  },
  render() {
    return (<div>
      <SegmentedControl
        selectedIndex={this.state.selectedIndex}
        values={['切换一', '切换二']}
        onChange={this._onChange}
      />
      <WhiteSpace mode={20} />
      <SegmentedControl
        selectedIndex={this.state.selectedIndex}
        values={['切换一', '切换二', '切换三']}
        onChange={this._onChange}
      />
      <WhiteSpace mode={20} />
      <SegmentedControl
        selectedIndex={this.state.selectedIndex}
        values={['切换一', '切换二', '切换三']}
        onChange={this._onChange}
      />
      <WhiteSpace mode={20} />
      <SegmentedControl
        selectedIndex={this.state.selectedIndex}
        values={['切换一', '切换二', '切换三']}
        onChange={this._onChange}
      />
    </div>);
  }
});

ReactDOM.render(<SegmentedControlExample />, mountNode);
````
