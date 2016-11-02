---
order: 0
title: 基本用法
---

基本的活动指示器。

````jsx
import { ActivityIndicator, WingBlank, WhiteSpace, Button } from 'antd-mobile';

const App = React.createClass({
  getInitialState() {
    return {
      animating: false,
    };
  },
  componentWillUnmount() {
    clearTimeout(this.closeTimer);
  },
  showToast() {
    this.setState({ animating: !this.state.animating });
    this.closeTimer = setTimeout(() => {
      this.setState({ animating: !this.state.animating });
    }, 90000);
  },
  render() {
    return (
      <div>
        <WingBlank>
          <div className="loading-container">
            <WhiteSpace size="xl" />
            <div className="loading-example">
              <p className="title">icon无文案</p>
              <ActivityIndicator animating />
            </div>
            <WhiteSpace size="xl" />
            <div className="loading-example">
              <p className="title">icon带文案</p>
              <ActivityIndicator
                text="加载中..."
              />
            </div>
            <WhiteSpace size="xl" />
            <div className="loading-example">
              <p className="title">大号icon</p>
              <ActivityIndicator
                size="large"
              />
            </div>
            <WhiteSpace size="xl" />
            <Button type="ghost" onClick={this.showToast}>点击显示 Toast</Button>
            <div className="toast-example">
              <ActivityIndicator
                toast
                text="正在加载"
                animating={this.state.animating}
              />
            </div>
          </div>
        </WingBlank>
      </div>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````

````css
.title {
  font-size: 0.28rem;
  color: #888;
  font-weight: 300;
  width: 25%;
}
.loading-example {
  display: flex;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
.darkBg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.89rem;
  height: 0.89rem;
  background-color: #2B2F42;
}
.loading-example .title {
  margin-right: 0.2rem;
}
````
