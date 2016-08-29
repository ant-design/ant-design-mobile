---
order: 1
title: 数字形态
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
            <p className="title">只显示数字</p>
            <Pagination
              mode="number"
              total={5}
              activeIndex={2}
            />
          </WingBlank>
          <WhiteSpace size={20} />
          <WingBlank>
            <Pagination
              mode="number"
              size="small"
              total={5}
              activeIndex={-1}
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