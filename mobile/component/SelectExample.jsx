/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { createForm } from 'rc-form';
import { List, SelectItem } from '../../index.js';

let SelectExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Page title="下拉选择" subtitle="&lt;SelectItem options={...} value='option1' /&gt;">
        <List>
          <List.Body>
            <SelectItem
              {...getFieldProps('select1', {
                initialValue: '2',
                valuePropName: 'value'
              })}
              label="下拉框"
              name="select1"
              align="right"
              options={[{ val:'1', txt:'文本内容1' }, { val:'2', txt:'文本内容2' }, { val:'3', txt:'文本内容3' }]}
            />
            <SelectItem
              {...getFieldProps('select1', {
                initialValue: '2',
                valuePropName: 'value'
              })}
              label="下拉框"
              name="select1"
              align="right"
              options={[{ val:'1', txt:'文本内容1' }, { val:'2', txt:'文本内容2' }, { val:'3', txt:'文本内容3' }]}
              error={true}
            />
            <SelectItem
              {...getFieldProps('select2', {
                initialValue: '3',
                valuePropName: 'value'
              })}
              name="select2"
              options={[{ val:'1', txt:'文本内容1' }, { val:'2', txt:'文本内容2' }, { val:'3', txt:'文本内容3' }]}
            />
          </List.Body>
        </List>
      </Page>
    );
  },
});

SelectExample = createForm()(SelectExample);

export default SelectExample;
