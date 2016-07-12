---
order: 0
title: 纵向
---

简单表格，默认为纵向排列

````jsx
import { Table } from 'antm';

const columns = [
  { title: '表头1', dataIndex: 'a', key: 'a' },
  { id: '123', title: '表头2', dataIndex: 'b', key: 'b' },
  { title: '表头3', dataIndex: 'c', key: 'c' },
];

const data = [{
  a: '我是内容',
  b: '我是内容',
  c: '我是内容',
  key: '1'
}, {
  a: '我是内容',
  b: '我是内容',
  c: '我是内容',
  key: '2'
}, {
  a: '我是内容',
  b: '我是内容',
  c: '我是内容',
  key: '3'
}];

ReactDOM.render(<Table
  columns={columns}
  dataSource={data}
/>, mountNode);
````
