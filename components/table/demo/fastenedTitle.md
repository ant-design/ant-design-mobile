---
order: 4
title: 锁定标题列
---

标题列锁定，可横向滚动

````jsx
import { Table } from 'antm';

const columns = [
  { title: '标题', dataIndex: 'title', key: 'title', width: 100, fixed: 'left' },
  { title: '姓名', dataIndex: 'a', key: 'a', width: 100 },
  { title: '年龄', dataIndex: 'b', key: 'b', width: 100 },
  { title: '身高', dataIndex: 'c', key: 'c', width: 100 },
  { title: '体重', dataIndex: 'b', key: 'd', width: 100 },
  { title: '爱好', dataIndex: 'b', key: 'e', width: 100 },
  { title: '生日', dataIndex: 'b', key: 'f', width: 100 },
  { title: '住址', dataIndex: 'b', key: 'g', width: 100 },
  { title: '电话', dataIndex: 'b', key: 'h', width: 100 },
  { title: '邮编', dataIndex: 'b', key: 'i', width: 100 },
  { title: '其他', dataIndex: 'b', key: 'j', width: 100 },
];

const data = [
  { title: '人物1', a: '二哈', b: '32', d: 3, key: '1' },
  { title: '人物2', a: '小明', b: '98', d: 3, key: '2' },
  { title: '人物3', a: '猪头', c: '16', d: 2, key: '3' },
  { title: '人物4', a: '小二', c: '33', d: 2, key: '4' },
];

ReactDOM.render(<div style={{ padding: 20 }}>
  <Table
    titleFixed
    columns={columns}
    dataSource={data}
  />
</div>, mountNode);
````
