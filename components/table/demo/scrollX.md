---
order: 3
title: 横向滚动
---

横向滚动的表格，无锁定项

````jsx
import { Table } from 'antm';

const columns = [
  { title: '姓名', dataIndex: 'a', key: 'a', width: 100, },
  { title: '年龄', dataIndex: 'b', key: 'b', width: 100, },
  { title: '身高', dataIndex: 'c', key: 'c', width: 100, },
  { title: '体重', dataIndex: 'b', key: 'd', width: 100, },
  { title: '爱好', dataIndex: 'b', key: 'e', width: 100, },
  { title: '生日', dataIndex: 'b', key: 'f', width: 100, },
  { title: '住址', dataIndex: 'b', key: 'g', width: 100, },
  { title: '电话', dataIndex: 'b', key: 'h', width: 100, },
  { title: '邮编', dataIndex: 'b', key: 'i', width: 100, },
  { title: '其他', dataIndex: 'b', key: 'j', width: 100, },
];

const data = [
  { a: '二哈', b: '32', d: 3, key: '1', },
  { a: '小明', b: '98', d: 3, key: '2', },
  { a: '猪头', c: '16', d: 2, key: '3', },
  { a: '小二', c: '33', d: 2, key: '4', },
];

ReactDOM.render(<div style={{ padding: 20 }}>
  <Table
    scrollX={true}
    columns={columns}
    dataSource={data}
  />
</div>, mountNode);
````
