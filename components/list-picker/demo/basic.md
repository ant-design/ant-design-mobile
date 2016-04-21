---
order: 0
title: List Picker
---



````jsx
import { ListPicker, List } from 'antm';

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

import {createForm} from 'rc-form';

let Test = React.createClass({
  render() {
    const {getFieldProps} = this.props.form;
    return (<div>
      <List>
        <List.Header>店铺位置</List.Header>
        <List.Body>
          <ListPicker extra="请选择(可选)" data={district} {...getFieldProps('district', {
            // initialValue: ['340000', '340800', '340822']
          })}
          >
            <List.Item arrow="horizontal">所在地区</List.Item>
          </ListPicker>
          <ListPicker data={district} cols={2} {...getFieldProps('district2', {
          })}

          >
            <List.Item arrow="horizontal">所在地区</List.Item>
          </ListPicker>
          <ListPicker data={district} cols={1} {...getFieldProps('district3', {
          })}

          >
            <List.Item arrow="horizontal">所在地区</List.Item>
          </ListPicker>
        </List.Body>
      </List>
    </div>);
  }
});

Test = createForm()(Test);

ReactDOM.render(<Test />, mountNode);
````
