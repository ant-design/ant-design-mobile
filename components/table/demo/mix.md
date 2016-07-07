---
order: 2
title: 混合
---

简单的表格，最后一列是各种操作。

````jsx
import { Table } from 'antm';

const titles = [
  '标题1', '标题2', '标题3'
];

const columns = [
  { title: '表头1', dataIndex: 'b', key: 'b' },
  { title: '表头2', dataIndex: 'c', key: 'c' },
  { title: '表头3', dataIndex: 'd', key: 'd' },
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

ReactDOM.render(<Table direction="mix" hTitles={titles} columns={columns} dataSource={data} />, mountNode);
````
