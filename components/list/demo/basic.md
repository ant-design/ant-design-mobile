---
order: 1
title: 基本
---

最简单的用法。

````jsx
import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';

let ListExample = React.createClass({
  render() {
    const { getFieldProps } = this.props.form;
    return (<form>
      <List
        title="列表头部"
        footer="列表尾部"
      >
        <List.Body>
          <List.Item>标题文字,没有设置onClick则点击无反馈效果</List.Item>
          <List.Item
            onClick={() => {}}
            extra={undefined}
          >标题文字</List.Item>
          <List.Item
            extra="内容内容"
            onClick={() => {}}
            arrow="horizontal"
          >标题文字</List.Item>
          <List.Item
            extra="内容内容"
            onClick={() => {}}
            arrow="up"
          >标题文字</List.Item>
          <List.Item
            extra="内容内容"
            onClick={() => {}}
            arrow="down"
          >标题文字</List.Item>
        </List.Body>
      </List>
      <List
        title="下拉框"
      >
        <List.Body>
          <List.Item
            extra={<select style={{ direction: 'rtl' }}
              {...getFieldProps('select1', {
                initialValue: 1,
              })}
            >
              <option value="1">选项1</option>
              <option value="2">选项2</option>
              <option value="3">选项3</option>
            </select>}
            arrow="horizontal"
          >下拉框</List.Item>
          <List.Item
            extra={<select style={{ direction: 'rtl' }} defaultValue="2">
              <option value="1">选项1</option>
              <option value="2">选项2</option>
              <option value="3" disabled>选项3不可选</option>
            </select>}
            arrow="horizontal"
          >下拉框</List.Item>
          <List.Item
            arrow="horizontal"
          >
            <select defaultValue="3">
              <option value="1">选项1</option>
              <option value="2" disabled>选项2不可选</option>
              <option value="3">选项3</option>
            </select>
          </List.Item>
        </List.Body>
      </List>
      <List
        title="滑动开关Switch"
      >
        <List.Body>
          <List.Item
            extra={<Switch
              {...getFieldProps('1', {
                initialValue: true,
                valuePropName: 'checked',
              })}
            />}
          >默认开</List.Item>
          <List.Item
            extra={<Switch
              {...getFieldProps('2', {
                initialValue: false,
                valuePropName: 'checked',
              })}
            />}
          >默认关</List.Item>
          <List.Item
            extra={<Switch
              {...getFieldProps('3', {
                initialValue: false,
                valuePropName: 'checked',
              })}
              disabled
            />}
          >默认关,不可修改</List.Item>
          <List.Item
            extra={<Switch
              {...getFieldProps('4', {
                initialValue: true,
                valuePropName: 'checked',
              })}
              disabled
            />}
          >默认开,不可修改</List.Item>
        </List.Body>
      </List>
      <List
        title="带缩略图"
      >
        <List.Body>
          <List.Item
            thumb="https://zos.alipayobjects.com/rmsportal/zotStpFiYpNtZNl.png"
            arrow="horizontal"
          >thumb</List.Item>
          <List.Item
            thumb="https://zos.alipayobjects.com/rmsportal/zotStpFiYpNtZNl.png"
          >thumb</List.Item>
          <List.Item
            icon=""
            extra={<img src="https://zos.alipayobjects.com/rmsportal/zotStpFiYpNtZNl.png" width="28" height="28" />}
            arrow="horizontal"
          >extra为img标签</List.Item>
        </List.Body>
      </List>
    </form>);
  },
});

ListExample = createForm()(ListExample);

ReactDOM.render(<ListExample />, mountNode);
````

```css
/** hack for antd responsive conflict */ 
@media only screen and (max-width: 767px) and (min-width: 320px) {
#list {
    display: block;
}
}
```