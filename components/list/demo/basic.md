---
order: 0
title: 基本
---

基本用法. ([rc-form 文档](https://github.com/react-component/form))

````jsx
import { List } from 'antd-mobile';
import { createForm } from 'rc-form';

let ListExample = React.createClass({
  render() {
    return (<form>
      <List
        renderHeader={() => '我是华丽丽的列表头部'}
        renderFooter={() => '我是列表尾部'}
      >
        <List.Item>标题文字点击无反馈，文字超长则隐藏</List.Item>
        <List.Item wrap>文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行</List.Item>
        <List.Item
          onClick={() => {}}
          extra={undefined}
        >标题文字</List.Item>
        <List.Item
          extra="右边内容"
          onClick={() => {}}
          arrow="horizontal"
        >标题文字</List.Item>
        <List.Item
          arrow="horizontal"
          onClick={() => {}}
        >
          <select defaultValue="3">
            <option value="1">选项1</option>
            <option value="2" disabled>选项2不可选</option>
            <option value="3">选项3</option>
          </select>
        </List.Item>
      </List>
      <List
        renderHeader={() => '带缩略图'}
      >
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/zotStpFiYpNtZNl.png"
          arrow="horizontal"
          onClick={() => {}}
        >缩略图</List.Item>
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/zotStpFiYpNtZNl.png"
        >缩略图</List.Item>
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
