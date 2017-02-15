---
order: 0
title: 示例
---

基本的分页器。

````jsx
import { Pagination, Icon } from 'antd-mobile';

const App = React.createClass({
  render() {
    return (
      <div className="pagination-container" >
        <p className="title">按钮内带文本</p>
        <Pagination total={5} current={1} prevText="上一步" nextText="下一步" />

        <p className="title">带文本和icon</p>
        <Pagination total={5} current={1}
          prevText={<div className="arrow-align"><Icon type="left" />上一步</div>}
          nextText={<div className="arrow-align">下一步<Icon type="right" /></div>}
        />

        <p className="title">隐藏数字</p>
        <Pagination simple total={5} current={1} prevText="上一步" nextText="下一步" />

        <p className="title">只显示数字</p>
        <Pagination mode="number" total={5} current={3} />

        <p className="title">点状</p>
        <Pagination mode="pointer" total={5} current={2} style={{ marginBottom: '0.32rem' }} />
      </div>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````
````css
.pagination-container {
  margin: 0 0.3rem;
}
.pagination-container .title {
  margin: 0.2rem 0;
}
.pagination-container .arrow-align {
  display: flex;
  align-items: center;
}
````
