---
order: 0
title: 基本
---

````jsx
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
    return (
      <SearchBar
        value={this.state.value}
        placeholder="搜索"
        onSubmit={(value) => console.log(value, 'onSubmit')}
        onClear={(value) => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={this.clear}
        onChange={this.onChange}
      />
    );
  },
});

ReactDOM.render(<SearchBarExample />, mountNode);
````
