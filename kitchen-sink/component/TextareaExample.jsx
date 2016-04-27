/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { createForm } from 'rc-form';
import { List, TextareaItem, InputItem } from 'antm';

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
              {...getFieldProps('note6', {
                initialValue: '',
                valuePropName: 'value'
              })}
              clear={true}
              rows={5}
              placeholder="如果你有什么建议意见，欢迎你来吐槽"
            />
            <TextareaItem
              type="hasBorder"
              {...getFieldProps('note7', {
                initialValue: '我的意见是...',
                valuePropName: 'value'
              })}
              clear={true}
              rows={5}
              placeholder="如果你有什么建议意见，欢迎你来吐槽"
            />
            <TextareaItem
              {...getFieldProps('note4', {
                initialValue: '我的意见是...',
                valuePropName: 'value'
              })}
              clear={true}
              rows={5}
              placeholder="请填写"
            />
            <TextareaItem
              {...getFieldProps('note5', {
                initialValue: '',
                valuePropName: 'value'
              })}
              title={<div style={{ backgroundImage: "url(https://os.alipayobjects.com/rmsportal/zumwvwrngNMGSWe.png)",   backgroundSize: "cover", height: "28px", width: "28px" }} />}
              clear={true}
              error={true}
              placeholder="请填写"
            />
            <TextareaItem
              {...getFieldProps('note', {
                initialValue: 'dada22东方朔放松放松东方朔放松放松冯绍峰放松放松放松放松放松放松放松放松',
                valuePropName: 'value'
              })}
              title="备注说明"
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
              title="备注"
              name="yyy"
              placeholder="请填写"
              clear={false}
              rows={5}
              count={100}
              onBlur={() => {console.log('onBlur');}}
              onFocus={(e) => {console.log('onFocus'); console.log(e);}}
            />
            <TextareaItem
              {...getFieldProps('note3', {
                initialValue: '',
                valuePropName: 'value'
              })}
              title="备注"
              error={true}
              placeholder="请填写"
            />
            <TextareaItem
              {...getFieldProps('note8', {
                initialValue: '',
                valuePropName: 'value'
              })}
              autoHeight
              clear
              title="备注"
              error
              placeholder="请填写"
            />
            <InputItem
              {...getFieldProps('normal', {
                initialValue: '',
                valuePropName: 'value'
              })}
              placeholder="placeholder"
              clear={true}
              onBlur={function(e){console.log('onBlur'); console.log(e);}}
              onFocus={function(e){console.log('onFocus'); console.log(e);}}
              extra="元"
            >InputItem</InputItem>
          </List.Body>
        </List>
      </Page>
    );
  },
});

TextareaExample = createForm()(TextareaExample);

export default TextareaExample;
