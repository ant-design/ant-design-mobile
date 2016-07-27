---
order: 0
title: 按钮形态
---

基本的分页器。

````jsx
import { Pagination, WhiteSpace, Icon, WingBlank } from 'antd-mobile';

let App = React.createClass({
  render() {
    return (
      <div className="loading-example">
        <div className="pagination-container" >
          <WhiteSpace size={20} />
          <WingBlank>
            <p className="title">按钮内带文本</p>
            <Pagination
              total={5}
              activeIndex={1}
              prevText="上一步"
              nextText="下一步"
            />
          </WingBlank>
          <WhiteSpace size={20} />
          <WingBlank>
            <p className="title">带文本和icon</p>
            <Pagination
              total={5}
              showNumber={false}
              activeIndex={1}
              prevText={<span><Icon type="left" />上一步</span>}
              nextText={<span>下一步<Icon type="right" /></span>}
            />
          </WingBlank>
          <WhiteSpace size={20} />
          <WingBlank>
            <p className="title">仅icon</p>
            <Pagination
              total={5}
              showNumber
              activeIndex={1}
              prevText={<Icon type="left" />}
              nextText={<Icon type="right" />}
            />
          </WingBlank>
          <WhiteSpace size={20} />
          <WingBlank>
            <p className="title">隐藏数字</p>
            <Pagination
              total={5}
              showNumber={false}
              activeIndex={1}
              prevText="上一步"
              nextText="下一步"
            />
          </WingBlank>
          <WhiteSpace size={20} />
          <WingBlank>
            <p className="title">小号</p>
            <Pagination
              total={5}
              size="small"
              activeIndex={1}
            />
          </WingBlank>
          <WhiteSpace size={20} />
          <WingBlank>
            <Pagination
              total={5}
              size="small"
              showNumber={false}
              activeIndex={1}
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