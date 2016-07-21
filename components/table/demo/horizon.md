---
order: 1
title: 横向
---

简单的表格，无表头，用标题列替代表头，columns第一项为取竖向标题的索引，dataSource每项中需要指定标题的值。

````jsx
import { Table } from 'antm';

const columns = [
  { title: '标题', dataIndex: 'title', key: 'title', },
  { title: '名字', dataIndex: 'name', key: 'name', },
  { title: '品种', dataIndex: 'type', key: 'type', },
  { title: '属性', dataIndex: 'class', key: 'class', },
];

const data = [{
  title: '宠物一',
  name: '科多',
  type: '英短',
  class: '猫',
  key: '1',
}, {
  title: '宠物二',
  name: '萨满',
  type: '英短',
  class: '猫',
  key: '2',
}, {
  title: '宠物三',
  name: '开心',
  type: '约克夏',
  class: '犬',
  key: '3',
}];

ReactDOM.render(<div style={{ padding: 20 }}>
  <Table
    direction="horizon"
    columns={columns}
    dataSource={data}
  />
</div>, mountNode);
````
