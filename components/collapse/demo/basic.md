---
order: 0
title: 基本
---

Collapse

````jsx
import { Collapse, List } from 'antd-mobile';

let Test = React.createClass({
  onChange(key) {
    console.log(key);
  },
  render() {
    return (<Collapse
      defaultActiveKey="0"
    >
      <Collapse.Panel header="标题文字">
        <List.Item>子内容子内容</List.Item>
        <List.Item>子内容子内容</List.Item>
        <List.Item>子内容子内容</List.Item>
        <List.Item>子内容子内容</List.Item>
      </Collapse.Panel>
      <Collapse.Panel header="标题文字"><List.Item>this is panel content2 or other</List.Item></Collapse.Panel>
      <Collapse.Panel header="标题文字"><List.Item>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</List.Item></Collapse.Panel>
    </Collapse>);
  },
});

ReactDOM.render(<Test />, mountNode);
````
