---
order: 1
title: 横向
---

简单的表格，无表头，用标题列替代表头

````jsx
import { Table } from 'antm';

const titles = [
  '标题1', '标题2', '标题3'
];

const columns = [
  { dataIndex: 'b', key: 'b' },
  { dataIndex: 'c', key: 'c' },
  { dataIndex: 'd', key: 'd' },
];

const data = [{
  b: '我是内容',
  c: '我是内容',
  d: '我是内容',
  key: '1'
}, {
  b: '我是内容',
  c: '我是内容',
  d: '我是内容',
  key: '2'
}, {
  b: '我是内容',
  c: '我是内容',
  d: '我是内容',
  key: '3'
}];

ReactDOM.render(<Table
  direction="horizon"
  hTitles={titles}
  columns={columns}
  dataSource={data}
/>, mountNode);
````
