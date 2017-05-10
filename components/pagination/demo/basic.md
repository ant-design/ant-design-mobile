---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

基本的分页器。

## en-US

Basic Pagination

````jsx
import { Pagination, Icon } from 'antd-mobile';

const locale = {
  prevText: 'Prev',
  nextText: 'Next',
};


const App = () => (
  <div className="pagination-container" >
    <p className="sub-title">Button with text</p>
    <Pagination total={5} current={1} locale={locale} />

    <p className="sub-title">Button with text and icon</p>
    <Pagination total={5} current={1}
      locale={{
        prevText: (<div className="arrow-align"><Icon type="left" />上一步</div>),
        nextText: (<div className="arrow-align">下一步<Icon type="right" /></div>),
      }}
    />

    <p className="sub-title">Hide number</p>
    <Pagination simple total={5} current={1} locale={locale} />

    <p className="sub-title">Show number only</p>
    <Pagination mode="number" total={5} current={3} />

    <p className="sub-title">Point Style</p>
    <Pagination mode="pointer" total={5} current={2} style={{ marginBottom: '0.32rem' }} />
  </div>
);


ReactDOM.render(<App />, mountNode);
````
````css
.pagination-container {
  margin: 0 0.3rem;
}
.pagination-container .arrow-align {
  display: flex;
  align-items: center;
}
.sub-title {
  color: #888;
  font-size: .28rem;
  padding: 30px 0 18px 0;
}
````
