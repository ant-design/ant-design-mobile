---
order: 0
title: 基本
---



````jsx
import { SearchBar, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
let SearchBarExample = React.createClass({
  getInitialState() {
    return {
      value: '美食',
    };
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          onSubmit={(value) => { console.log(`onSubmit${value}`); }}
          onClear={(value) => { console.log(value, 'onClear'); }}
          onCancel={(value) => { console.log(value, 'onCancel'); this.setState({ value: '' }); }}
          onFocus={() => { console.log('onFocus'); }}
          onBlur={() => { console.log('onBlur'); }}
          cancelTxt="自定义"
        />
        <WhiteSpace />
        <SearchBar
          {...getFieldProps('SearchBar2')}
          placeholder="地图搜索"
          onSubmit={(value) => { console.log(`onSubmit${value}`); }}
          onClear={() => { console.log('onClear'); }}
          onCancel={() => { console.log('onCancel'); }}
        />
        <WhiteSpace />
        <SearchBar
          value=""
          placeholder="取消按钮总是显示"
          onSubmit={(value) => { console.log(`onSubmit${value}`); }}
          onClear={() => { console.log('onClear'); }}
          onCancel={() => { console.log('onCancel'); }}
          showCancelButton
        />
        <WhiteSpace />
        <SearchBar placeholder="搜索框被禁用" disabled />
      </div>
    );
  },
});

SearchBarExample = createForm()(SearchBarExample);

ReactDOM.render(<SearchBarExample />, mountNode);
````
