---
order: 2
title: 混合
---

有表头和标题列混合使用

````jsx
import { Table } from 'antm';

const columns = [
  { title: '名字', dataIndex: 'name', key: 'name' },
  { title: '品种', dataIndex: 'type', key: 'type' },
  { title: '属性', dataIndex: 'class', key: 'class' },
];

const data = [{
  title: '宠物一',
  name: '科多',
  type: '英短',
  class: '猫',
  key: '1'
}, {
  title: '宠物二',
  name: '萨满',
  type: '英短',
  class: '猫',
  key: '2'
}, {
  title: '宠物三',
  name: '开心',
  type: '约克夏',
  class: '犬',
  key: '3'
}];

ReactDOM.render(<div style={{ padding: 20 }}>
  <Table
    direction="mix"
    columns={columns}
    dataSource={data}
  />
</div>, mountNode);
````
