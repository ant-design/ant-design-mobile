import React from 'react';
import Page from '../common/Page';
import { SegmentedControl, WhiteSpace } from 'antm';

const SegmentedControlExample = React.createClass({
  getInitialState(){
    return { selectedIndex: 0 };
  },
  _onChange(index) {
    this.setState({
      selectedIndex:index
    });
  },
  render() {
    return (
      <Page title="选项卡" subtitle="&lt;SegmentedControl selectedIndex={0} values={['切换一', '切换二']} /&gt;">
        <SegmentedControl
          selectedIndex={this.state.selectedIndex}
          values={['切换一', '切换二']}
          onChange={this._onChange}
        />
        <WhiteSpace mode={20}/>
        <SegmentedControl
          selectedIndex={this.state.selectedIndex}
          values={['切换一', '切换二', '切换三']}
          onChange={this._onChange}
        />
        <WhiteSpace mode={20}/>
        <SegmentedControl
          selectedIndex={this.state.selectedIndex}
          values={['切换一', '切换二', '切换三']}
          onChange={this._onChange}
        />
        <WhiteSpace mode={20}/>
        <SegmentedControl
          selectedIndex={this.state.selectedIndex}
          values={['切换一', '切换二', '切换三']}
          onChange={this._onChange}
        />
      </Page>
    );
  },
});

export default SegmentedControlExample;
