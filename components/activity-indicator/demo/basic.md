---
order: 0
title: 基本用法
---

基本的活动指示器。

````jsx
import { ActivityIndicator, WhiteSpace } from 'antd-mobile';

const App = React.createClass({
  render() {
    return (
      <div>
        <div className="loading-container" >
          <WhiteSpace size={20} />
          <div className="loading-example">
            <p className="title">icon无文案</p>
            <ActivityIndicator animating />
          </div>
          <WhiteSpace size={20} />
          <div className="loading-example">
            <p className="title">icon带文案</p>
            <ActivityIndicator
              text="正在加载..."
            />
          </div>
          <WhiteSpace size={20} />
          <div className="loading-example white">
            <p className="title">white</p>
            <ActivityIndicator color="white" />
          </div>
          <WhiteSpace size={20} />
          <div className="loading-example">
            <p className="title">大号</p>
            <ActivityIndicator
              size="large"
            />
          </div>
          <WhiteSpace size={20} />
          <WhiteSpace size={20} />
          <div className="toast-example">
            <p className="title">Toast</p>
            <ActivityIndicator
              toast
              text="正在加载"
            />
          </div>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````

````css
.loading-example {
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
}
.loading-example.white {
  color: #fff;
  background-color: #2B2F42;
}
.loading-example .title {
  margin-right: 20px;
}
````