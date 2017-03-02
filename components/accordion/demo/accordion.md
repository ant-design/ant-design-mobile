---
order: 1
title:
  zh-CN: 手风琴模式
  en-US: 'Accordion Mode'
---

Accordion

````jsx
import { Accordion, List } from 'antd-mobile';

class AccordionExmple extends React.Component {
  onChange = (key) => {
    console.log(key);
  }
  render() {
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion accordion openAnimation={{}} className="my-accordion">
          <Accordion.Panel header="标题一">
            <List className="my-list">
              <List.Item>子内容一</List.Item>
              <List.Item>子内容二</List.Item>
              <List.Item>子内容三</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="标题二" className="pad">this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel header="标题三" className="pad">
            文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}

ReactDOM.render(<AccordionExmple />, mountNode);
````
````css
.my-accordion .pad .am-accordion-content-box {
  padding: 0.2rem;
}
.my-accordion .my-list .am-list-body {
  border-top: 0;
}
.my-accordion .my-list .am-list-body:after {
  border-bottom: 0;
}
````
