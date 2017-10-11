---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

````jsx
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class SearchBarExample extends React.Component {
  state = {
    value: '美食',
    focused: false,
  };
  onChange= (value) => {
    // console.log(value, 'onChange');
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  render() {
    return (<div>
      <WingBlank><div className="sub-title">Normal</div></WingBlank>
      <SearchBar placeholder="Search" maxLength={8} />
      <WhiteSpace />
      <WingBlank><div className="sub-title">AutoFocus in Alipay client</div></WingBlank>
      <SearchBar placeholder="自动获取光标，支付宝客户端有效" autoFocus />
      <WhiteSpace />
      <WingBlank><div className="sub-title">Focus by operation</div></WingBlank>
      <SearchBar
        placeholder="手动获取获取光标"
        focused={this.state.focused}
        onFocus={() => {
          this.setState({
            focused: false,
          });
        }}
      />
      <WhiteSpace />
      <WingBlank>
        <Button
          onClick={() => {
            this.setState({
              focused: true,
            });
          }}
        >Click to Focus</Button>
      </WingBlank>
      <WhiteSpace />
      <WingBlank><div className="sub-title">Show Cancel Button</div></WingBlank>
      <SearchBar
        value={this.state.value}
        placeholder="Search"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={() => console.log('onCancel')}
        showCancelButton
        onChange={this.onChange}
      />
    </div>);
  }
}

ReactDOM.render(<SearchBarExample />, mountNode);
````

```css
.am-search {
  border-bottom: 1px solid #ddd;
}
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
}
```
