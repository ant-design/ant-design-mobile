---
order: 1
title: 手风琴模式
---

Accordion

````jsx
import { Accordion, List } from 'antd-mobile';

const AccordionExmple = React.createClass({
  onChange(key) {
    console.log(key);
  },
  render() {
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion accordion openAnimation={{}}>
          <Accordion.Panel header="标题一">
            <List.Item>子内容一</List.Item>
            <List.Item>子内容二</List.Item>
            <List.Item>子内容三</List.Item>
          </Accordion.Panel>
          <Accordion.Panel header="标题二"><List.Item>this is panel content2 or other</List.Item></Accordion.Panel>
          <Accordion.Panel header="标题三"><List.Item>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</List.Item></Accordion.Panel>
        </Accordion>
      </div>
    );
  },
});

ReactDOM.render(<AccordionExmple />, mountNode);
````
