---
order: 2
title: 点状型
---

基本的分页器。

````jsx
import { Pagination, WhiteSpace, WingBlank } from 'antd-mobile';

const App = React.createClass({
  render() {
    return (
      <div>
        <div className="pagination-container" >
          <WhiteSpace size="lg" />
          <WingBlank>
            <p className="title">点状</p>
            <Pagination
              mode="pointer"
              total={5}
              current={2}
            />
          </WingBlank>
          <WhiteSpace size="lg" />
        </div>
      </div>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````

````css
.loading-example .title {
  margin-right: 20px;
}
````