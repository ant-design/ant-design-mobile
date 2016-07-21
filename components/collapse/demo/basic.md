---
order: 0
title: 基本
---

Collapse

````jsx
import { Collapse, List } from 'antm';

let Test = React.createClass({
  onChange(key) {
    console.log(key);
  },
  render() {
    return (<Collapse
      defaultActiveKey="0"
    >
      <Collapse.Panel header="hellohellohellohellohellohe">
        <List.Item>子内容子内容</List.Item>
        <List.Item>子内容子内容</List.Item>
        <List.Item>子内容子内容</List.Item>
        <List.Item>子内容子内容</List.Item>
      </Collapse.Panel>
      <Collapse.Panel header="title2"><List.Item>this is panel content2 or other</List.Item></Collapse.Panel>
      <Collapse.Panel header="title3"><List.Item>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</List.Item></Collapse.Panel>
    </Collapse>);
  },
});

ReactDOM.render(<Test />, mountNode);
````
