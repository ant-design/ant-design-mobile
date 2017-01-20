---
order: 0
title: 示例
---

````__react
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

const SearchBarExample = React.createClass({
  getInitialState() {
    return {
      value: '美食',
      focused: false,
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
      <p style={{ padding: 10, color: '#999' }}>自动获取光标</p>
      <SearchBar placeholder="自动获取光标" autoFocus />
      <p style={{ padding: 10, color: '#999' }}>手动获取获取光标</p>
      <SearchBar
        placeholder="手动获取获取光标"
        focused={this.state.focused}
        onFocus={() => {
          this.setState({
            focused: false,
          });
        }}
      />
      <WhiteSpace/>
      <WingBlank>
        <Button
          onClick={() => {
            this.setState({
              focused: true,
            });
          }}
          type="primary"
        >点击获取光标</Button>
      </WingBlank>
      <WhiteSpace/>
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
