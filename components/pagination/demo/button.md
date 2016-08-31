---
order: 0
title: 按钮形态
---

基本的分页器。

````jsx
import { Pagination, WhiteSpace, Icon, WingBlank } from 'antd-mobile';

const App = React.createClass({
  render() {
    return (
      <div className="loading-example">
        <div className="pagination-container" >
          <WhiteSpace size="lg" />
          <WingBlank>
            <p className="title">按钮内带文本</p>
            <Pagination
              total={5}
              current={1}
              prevText="上一步"
              nextText="下一步"
            />
          </WingBlank>
          <WhiteSpace size="lg" />
          <WingBlank>
            <p className="title">带文本和icon</p>
            <Pagination
              total={5}
              current={1}
              prevText={<div><Icon type="left" />上一步</div>}
              nextText={<div>下一步<Icon type="right" /></div>}
            />
          </WingBlank>
          <WhiteSpace size="lg" />
          <WingBlank>
            <p className="title">隐藏数字</p>
            <Pagination
              total={5}
              simple
              current={1}
              prevText="上一步"
              nextText="下一步"
            />
          </WingBlank>
          <WhiteSpace size="lg" />
          <WingBlank>
            <p className="title">只显示数字</p>
            <Pagination
              mode="number"
              total={5}
              current={3}
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
.demo-preview-item .loading-example * {
  box-sizing: border-box;
}
.loading-example .title {
  margin-bottom: 20px;
}

````