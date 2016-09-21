---
order: 3
title: Extra
---

双行列表

````jsx
import { List, Button } from 'antd-mobile';

const Brief = List.Item.Brief;

ReactDOM.render(
  <div>
    <List
      renderHeader={() => 'Extra'}
    >
      <List.Item
        onClick={() => {}}
        extra={<select style={{ direction: 'rtl' }} defaultValue="2">
          <option value="1">选项1</option>
          <option value="2">选项2</option>
          <option value="3" disabled>选项3不可选</option>
        </select>}
        arrow="horizontal"
      >下拉框</List.Item>
      <List.Item
        onClick={() => {}}
        extra={<img src="https://zos.alipayobjects.com/rmsportal/zotStpFiYpNtZNl.png" />}
        arrow="horizontal"
      >
        extra为img标签
      </List.Item>
      <List.Item
        extra={<Button
          size="small"
          inline
          onClick={() => alert('点击了按钮')}
        >按钮</Button>}
        multipleLine
      >
        区域经理
        <Brief>可进行收款、退款、折扣管理、查看数据等操作</Brief>
      </List.Item>
    </List>
  </div>
, mountNode);
````
