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
          <WhiteSpace size={20} />
          <WingBlank>
            <p className="title">点状</p>
            <Pagination
              mode="pointer"
              size="large"
              total={5}
              activeIndex={1}
            />
          </WingBlank>
          <WhiteSpace size={20} />
          <WingBlank>
            <Pagination
              mode="pointer"
              size="small"
              total={5}
              activeIndex={2}
            />
          </WingBlank>
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