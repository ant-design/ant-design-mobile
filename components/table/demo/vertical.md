---
order: 0
title: 纵向
---

简单表格，默认为纵向排列

````jsx
import { Table } from 'antd-mobile';

const columns = [
  { title: '名字', dataIndex: 'name', key: 'name' },
  { title: '品种', dataIndex: 'type', key: 'type' },
  { title: '属性', dataIndex: 'class', key: 'class' },
];

const data = [{
  name: '科多',
  type: '英短',
  class: '猫',
  key: '1',
}, {
  name: '萨满',
  type: '英短',
  class: '猫',
  key: '2',
}, {
  name: '开心',
  type: '约克夏',
  class: '犬',
  key: '3',
}];

ReactDOM.render(<div style={{ padding: 20 }}>
  <Table
    columns={columns}
    dataSource={data}
  />
</div>, mountNode);
````
