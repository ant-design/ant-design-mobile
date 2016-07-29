---
order: 0
title: 基本
---



````jsx
import { SearchBar } from 'antd-mobile';
import { createForm } from 'rc-form';
let SearchBarExample = React.createClass({
  getInitialState() {
    return {
      value: '蚂蚁中台',
    };
  },
  render() {
    const { getFieldProps } = this.props.form;
    console.log(this.props.form.getFieldsValue());
    return (
      <div>
        <SearchBar
          value="美食"
          placeholder="搜索"
          onSubmit={(value) => { console.log(`onSubmit${value}`); }}
          onClear={() => { console.log('onClear'); }}
          onCancel={() => { console.log('onCancel'); }}
          onFocus={() => { console.log('onFocus'); }}
          onBlur={() => { console.log('onBlur'); }}
        />
        <SearchBar
          {...getFieldProps('SearchBar2')}
          placeholder="地图搜索"
          onSubmit={(value) => { console.log(`onSubmit${value}`); }}
          onClear={() => { console.log('onClear'); }}
          onCancel={() => { console.log('onCancel'); }}
        />
        <SearchBar
          value=""
          placeholder="取消按钮总是显示"
          onSubmit={(value) => { console.log(`onSubmit${value}`); }}
          onClear={() => { console.log('onClear'); }}
          onCancel={() => { console.log('onCancel'); }}
          showCancelButton
        />
        <SearchBar placeholder="搜索框被禁用" disablSearch />
      </div>
    );
  },
});

SearchBarExample = createForm()(SearchBarExample);

ReactDOM.render(<SearchBarExample />, mountNode);
````
