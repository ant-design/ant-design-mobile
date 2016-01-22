# 基本

- order: 0


---

````jsx
import { SegmentedControl, WhiteSpace } from 'antm';
console.log(SegmentedControl);
let SegmentedControlExample = React.createClass({
  getInitialState(){
    return { selectedIndex: 0 };
  },
  _onChange(index) {
    this.setState({
      selectedIndex:index
    });
  },
  render() {
    return (<div>
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
    </div>);
  }
});

ReactDOM.render(<SegmentedControlExample />, document.getElementById('components-segmented-control-demo-basic'));
````