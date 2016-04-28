/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { createForm } from 'rc-form';
// import { List, SwitchItem } from 'antm';
import { List, SwitchItem } from 'antm';

let SwitchExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Page title="滑动开关" subtitle="&lt;SwitchItem value={true} /&gt;">
        <List >
          <List.Header>表单开关项</List.Header>
          <List.Body>
            <SwitchItem
              {...getFieldProps('1', {
                initialValue: true,
                valuePropName: 'checked',
              })}
            >默认开-使用 Ant Desgin Component</SwitchItem>
            <SwitchItem
              {...getFieldProps('2', {
                initialValue: false,
                valuePropName: 'checked'
              })}
            >默认关-使用 Ant Desgin Component</SwitchItem>
            <SwitchItem
              {...getFieldProps('3', {
                initialValue: false,
                valuePropName: 'checked'
              })}
              disabled={true}
            >默认关不可修改-使用 Ant Desgin Component</SwitchItem>
            <SwitchItem
              {...getFieldProps('4', {
                initialValue: true,
                valuePropName: 'checked'
              })}
              disabled={true}
            >默认开不可修改-使用 Ant Desgin Component</SwitchItem>
          </List.Body>
        </List>
        <List>
          <List.Header>纯的Switch</List.Header>
          <List.Body>
            <List.Item
              style={{ paddingTop: '6px', paddingBottom: '6px' }}
            >
              <SwitchItem
                type="pure"
                {...getFieldProps('pure1', {
                  initialValue: true,
                  valuePropName: 'checked',
                })}
              />
            </List.Item>
            <List.Item
              style={{ paddingTop: '6px', paddingBottom: '6px' }}
              extra="List.Item嵌入SwitchItem"
            >
              <SwitchItem
                type="pure"
                {...getFieldProps('pure2', {
                  initialValue: true,
                  valuePropName: 'checked',
                })}
              />
            </List.Item>
            <List.Item
              style={{ paddingTop: '6px', paddingBottom: '6px' }}
              needActive={false}
              extra={<SwitchItem
                type="pure"
                {...getFieldProps('pure3', {
                  initialValue: true,
                  valuePropName: 'checked',
                })}
              />}
            />
          </List.Body>
        </List>
      </Page>
    );
  },
});

SwitchExample = createForm()(SwitchExample);

export default SwitchExample;
