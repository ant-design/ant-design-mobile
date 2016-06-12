---
order: 0
title: 基本
---

数据级联选择示例

````jsx
import { Picker, List } from 'antm';

import district from 'site/data/district';

function loop(tree, fn) {
  tree.forEach((t) => {
    fn(t);
    if (t.c) {
      loop(t.c, fn);
    }
  });
}

loop(district, (d) => {
  d.value = d.i;
  d.label = d.n;
  d.children = d.c;
});

import { createForm } from 'rc-form';

let Test = React.createClass({
  getInitialState() {
    return {
      data: [],
    };
  },
  onClick() {
    console.log('start loading data');
    setTimeout(() => {
      this.setState({
        data: district
      });
    }, 500);
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <List>
        <List.Header>联动选择</List.Header>
        <List.Body>
          <Picker extra="请选择(可选)" data={district} title="选择地区" {...getFieldProps('district', {
            initialValue: ['340000', '340800', '340822']
          })}
          >
            <List.Item arrow="horizontal">省市区选择</List.Item>
          </Picker>
          <Picker data={this.state.data} cols={2} {...getFieldProps('district2')}>
            <List.Item arrow="horizontal" onClick={this.onClick}>省市选择(异步加载)</List.Item>
          </Picker>
          <Picker data={district} cols={1} {...getFieldProps('district3')}>
            <List.Item arrow="horizontal">选择省份</List.Item>
          </Picker>
        </List.Body>
      </List>
    </div>);
  }
});

Test = createForm()(Test);

ReactDOM.render(<Test />, mountNode);
````
