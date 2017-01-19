---
order: 0
title: 示例
---

````__react
import { SearchBar } from 'antd-mobile';

const SearchBarExample = React.createClass({
  getInitialState() {
    return {
      value: '美食',
    };
  },
  onChange(value) {
    this.setState({ value });
  },
  clear() {
    this.setState({ value: '' });
  },
  render() {
    return (<div>
      <SearchBar placeholder="搜索" />
      <p style={{ padding: 10, color: '#999' }}>显示取消按钮</p>
      <SearchBar
        value={this.state.value}
        placeholder="搜索"
        onSubmit={(value) => console.log(value, 'onSubmit')}
        onClear={(value) => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        showCancelButton
        onChange={this.onChange}
      />
    </div>);
  },
});

ReactDOM.render(<SearchBarExample />, mountNode);
````
