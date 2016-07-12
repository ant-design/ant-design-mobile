---
order: 4
title: 锁定标题列
---

标题列锁定，可横向滚动

````jsx
import { Table } from 'antm';

const titles = [
  '标题1', '标题2', '标题3', '标题4'
];

const columns = [
  { title: '表头1', dataIndex: 'a', key: 'a', width: 100 },
  { title: '表头2', dataIndex: 'b', key: 'b', width: 100 },
  { title: '表头3', dataIndex: 'c', key: 'c', width: 100 },
  { title: '表头4', dataIndex: 'b', key: 'd', width: 100 },
  { title: '表头5', dataIndex: 'b', key: 'e', width: 100 },
  { title: '表头6', dataIndex: 'b', key: 'f', width: 100 },
  { title: '表头7', dataIndex: 'b', key: 'g', width: 100 },
  { title: '表头8', dataIndex: 'b', key: 'h', width: 100 },
  { title: '表头9', dataIndex: 'b', key: 'i', width: 100 },
  { title: '表头10', dataIndex: 'b', key: 'j', width: 100 },
  { title: '表头11', dataIndex: 'b', key: 'k', width: 100 },
  { title: '表头12', dataIndex: 'b', key: 'l', width: 100 },
];

const data = [
  { a: '123', b: 'zzz', d: 3, key: '1' },
  { a: 'cdd', b: 'vvv', d: 3, key: '2' },
  { a: '133', c: 'bbbb', d: 2, key: '3' },
  { a: '133', c: 'mmmm', d: 2, key: '4' },
];

ReactDOM.render(<Table
  fixedTitle={true}
  hTitles={titles}
  titleWidth={80}
  columns={columns}
  dataSource={data}
/>, mountNode);
````
