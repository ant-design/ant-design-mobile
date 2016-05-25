---
order: 0
title: 基本
---

Button

---

````jsx
import { Button, WingBlank, WhiteSpace, NavBar } from 'antm';

const ButtonExample = React.createClass({
  getInitialState() {
    return {
      dark: false,
    };
  },
  switchDark() {
    this.setState({ dark: !this.state.dark });
    this.props.onNavBarChange();
  },
  render() {
    ButtonExample.customNavBar = (<NavBar iconName={false} rightContent={<Button size="small" inline
      onClick={this.switchDark}
    >{this.state.dark ? '白天' : '夜间'}</Button>}>基本</NavBar>);

    return (
      <div className="button-container"
        style={{ backgroundColor: this.state.dark ? 'black' : 'white' }}
      >
        <WhiteSpace />
        <WingBlank>
          <Button type="primary">primary按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" ghost>primary ghost 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button>default 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button ghost>default ghost 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button loading>loading 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="warning">warning 按钮</Button>
        </WingBlank>

        <WhiteSpace />
        <WingBlank>
          <Button type="primary" disabled>primary 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" ghost disabled>primary ghost 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button disabled>default disabled 按钮</Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button ghost disabled>default ghost disabled 按钮</Button>
        </WingBlank>
        <WhiteSpace />
      </div>
    );
  }
});

ReactDOM.render(<ButtonExample />, mountNode);
````
