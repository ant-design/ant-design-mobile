import React from 'react';
import Page from '../common/Page';
import { List, ListPicker } from '../../index.js';
import { createForm } from 'rc-form';

const district = [
  {
    'c':
      [
        {
          'c':[],
          'n':'苏州市',
          'i':'300100',
        },
        {
          'c':[],
          'n':'南京市',
          'i':'300101',
        },
        {
          'c':[],
          'n':'徐州市',
          'i':'300102',
        },
        {
          'c':[],
          'n':'无锡市',
          'i':'300103',
        },
      ],
    'n':'江苏省',
    'i':'003',
  },
  {
    'c':
      [
        {
          'c':[],
          'n':'重庆市',
          'i':'400100',
        },
      ],
    'n':'重庆市',
    'i':'004',
  },
  {
    'c':
      [
        {
          'c':[],
          'n':'杭州市',
          'i':'500100',
        },
        {
          'c':[],
          'n':'温州市',
          'i':'500101',
        },
      ],
    'n':'浙江省',
    'i':'005',
  },
];

function loop(tree, fn){
  tree.forEach((t) => {
    fn(t);
    if(t.c){
      loop(t.c, fn);
    }
  });
}

loop(district, (d) => {
  d.value = d.i;
  d.label = d.n;
  d.children = d.c;
});


let ListPickerExample = React.createClass({
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Page title="ListPicker" subtitle="&lt;ListPicker /&gt;">
        <List>
          <List.Header>店铺位置</List.Header>
          <List.Body>
            <ListPicker data={district} cols={2} {...getFieldProps('district', {
              initialValue: ['340000', '340800', '340822']
            })}
            >
              <List.Item arrow="horizontal">所在地区</List.Item>
            </ListPicker>
            <ListPicker data={district} cols={2} {...getFieldProps('district2')}>
              <List.Item arrow="horizontal">所在地区</List.Item>
            </ListPicker>
            <ListPicker data={district} cols={2} {...getFieldProps('district3', {
            })}

            >
              <List.Item arrow="horizontal">所在地区</List.Item>
            </ListPicker>
          </List.Body>
        </List>
      </Page>
    );
  },
});

ListPickerExample = createForm()(ListPickerExample);

export default ListPickerExample;
