---
order: 1
title: 取消按钮
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
  clear(value) {
    this.setState({ value: '' });
  },
  render() {
    return (
      <SearchBar
        value={this.state.value}
        placeholder="搜索"
        onCancel={this.clear}
        cancelText="自定义"
        showCancelButton
        onChange={this.onChange}
      />
    );
  },
});

ReactDOM.render(<SearchBarExample />, mountNode);
````
