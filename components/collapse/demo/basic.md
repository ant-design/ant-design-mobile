---
order: 0
title: 基本
---

Collapse

---

````jsx
import { Collapse } from 'antm';

let Test = React.createClass({
  onChange(key) {
    console.log(key);
  },
  render() {
    return (<Collapse
      defaultActiveKey="0"
      onChange={this.onChange}
    >
      <Collapse.Panel header="hellohellohellohellohellohe">{['this is panel contentthis is panel contentthis is panel contentthis is panel contentthis is panel content', 'this is panel content', 222]}</Collapse.Panel>
      <Collapse.Panel header="title2">this is panel content2 or other</Collapse.Panel>
      <Collapse.Panel header="title2">
        <Collapse
          defaultActiveKey="0"
          prefixCls="am-collapse">
          <Collapse.Panel header="This is panel nest panel">daadada</Collapse.Panel>
        </Collapse>
      </Collapse.Panel>
    </Collapse>);
  }
});

ReactDOM.render(<Test />, mountNode);
````
