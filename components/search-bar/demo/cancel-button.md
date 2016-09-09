---
order: 1
title: 定制取消按钮文案和回调
---

````jsx
import { SearchBar } from 'antd-mobile';

const SearchBarExample = React.createClass({
  getInitialState() {
    return {
      value: '',
    };
  },
  onChange(value) {
    this.setState({ value });
  },
  render() {
    return (
      <SearchBar
        value={this.state.value}
        placeholder="搜索"
        onCancel={(value) => { alert(`${value}, 取消事件自定义`); }}
        cancelText="搜索"
        showCancelButton
        onChange={this.onChange}
      />
    );
  },
});

ReactDOM.render(<SearchBarExample />, mountNode);
````
