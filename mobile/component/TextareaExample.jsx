/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { createForm } from 'rc-form';
import { List, TextareaItem } from '../../index.js';

let TextareaExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Page title="多行输入" subtitle="&lt;TextareaItem placeholder='请填写' /&gt;">
        <List>
          <List.Body>
            <TextareaItem
              {...getFieldProps('note', {
                initialValue: 'dada22东方朔放松放松东方朔放松放松冯绍峰放松放松放松放松放松放松放松放松',
                valuePropName: 'value'
              })}
              label="备注说明"
              name="yyy"
              rows={5}
              placeholder="带清除"
              clear={true}
              onBlur={() => {console.log('onBlur'); }}
              onFocus={(e) => {console.log('onFocus'); console.log(e);}}
            />
            <TextareaItem
              {...getFieldProps('note2', {
                initialValue: '',
                valuePropName: 'value'
              })}
              label="备注说明"
              name="yyy"
              placeholder="请填写"
              clear={false}
              rows={5}
              maxLength={100}
              onBlur={() => {console.log('onBlur');}}
              onFocus={(e) => {console.log('onFocus'); console.log(e);}}
            />
            <TextareaItem
              {...getFieldProps('note3', {
                initialValue: '',
                valuePropName: 'value'
              })}
              label="备注说明"
              error={true}
              placeholder="请填写"
            />
            <TextareaItem
              {...getFieldProps('note4', {
                initialValue: '',
                valuePropName: 'value'
              })}
              label="备注说明"
              clear={true}
              error={true}
              placeholder="请填写"
            />
          </List.Body>
        </List>
      </Page>
    );
  },
});

TextareaExample = createForm()(TextareaExample);

export default TextareaExample;
