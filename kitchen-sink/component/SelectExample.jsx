/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { createForm } from 'rc-form';
import { List, Select } from 'antm';

let SelectExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Page title="下拉选择" subtitle="&lt;Select options={...} value='option1' /&gt;">
        <List>
          <List.Body>
            <List.Item
              extra={<Select
                {...getFieldProps('select', {
                  initialValue: '2',
                  valuePropName: 'value'
                })}
                name="select1"
                align="right"
                options={[{ val: '1', txt: '文本内容1' }, { val: '2', txt: '文本内容2' }, { val: '3', txt: '文本内容3' }]}
              />}
              arrow="down"
            />
            <List.Item
              extra={<Select
                {...getFieldProps('select1', {
                  initialValue: '2',
                  valuePropName: 'value'
                })}
                label="下拉框"
                name="select1"
                align="right"
                options={[{ val: '1', txt: '文本内容1' }, { val: '2', txt: '文本内容2' }, { val: '3', txt: '文本内容3' }]}
                error={true}
              />}
              arrow="horizontal"
            />
            <List.Item
              extra={<Select
                {...getFieldProps('select2', {
                  initialValue: '3',
                  valuePropName: 'value'
                })}
                name="select2"
                align="right"
                options={[{ val: '1', txt: '文本内容1' }, { val: '2', txt: '文本内容2' }, { val: '3', txt: '文本内容3' }]}
              />}
              arrow="up"
            >请选择</List.Item>
            <List.Item
              arrow="horizontal"
            ><Select
              {...getFieldProps('select3', {
                initialValue: '3',
                valuePropName: 'value'
              })}
              name="select2"
              options={[{ val: '1', txt: '文本内容1' }, { val: '2', txt: '文本内容2' }, { val: '3', txt: '文本内容3' }]}
            /></List.Item>
          </List.Body>
        </List>
      </Page>
    );
  },
});

SelectExample = createForm()(SelectExample);

export default SelectExample;
