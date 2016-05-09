/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { List, Button, WingBlank, WhiteSpace, Radio } from 'antm';
import { createForm } from 'rc-form';

const RadioItem = Radio.RadioItem;

let RadioExample = React.createClass({
  getInitialState() {
    return {
      disabled: false,
      checked: null,
      r: 'a',
      s: 'e'
    }
  },
  handleChange(e) {
    this.setState({
      r: e.target.value
    })
  },
  handleChange2(e) {
    this.setState({
      s: e.target.value
    })
  },
  render() {
    return (
      <Page title="Radio" subtitle="&lt;Radio /&gt;">
        <List >
          <List.Header>表单多选项，普通列表中多选项</List.Header>
          <List.Body>
            <RadioItem
              value = "a"
              checked = {this.state.r === 'a'}
              onChange={this.handleChange}
              disabled={this.state.disabled}
            >
              使用 Ant Desgin Component
            </RadioItem>
            <RadioItem
              value = "b"
              checked = {this.state.r === 'b'}
              onChange={this.handleChange}
              disabled={this.state.disabled}
            >
              使用 Ant Desgin Component
            </RadioItem>
            <RadioItem
              value = "c"
              checked = {true}
              onChange={this.handleChange}
              disabled={true}
            >
              个性化调整disabled
            </RadioItem>
            <RadioItem
              value = "d"
              checked = {false}
              onChange={this.handleChange}
              disabled={true}
            >
              个性化调整disabled
            </RadioItem>
          </List.Body>
        </List>
        <WhiteSpace mode={12}/>
        <div style={{ position: 'relative'}}>
          <span style={{ borderWidth: '1px', borderColor: 'red', borderStyle: 'solid' }}>
            <Radio
              value = "e"
              checked = {this.state.s === 'e'}
              onChange={this.handleChange2}
            />
          </span>
          <span style={{ borderWidth: '1px', borderColor: 'red', borderStyle: 'solid' }}>
            <Radio
              value = "f"
              checked = {this.state.s === 'f'}
              onChange={this.handleChange2}
            />
          </span>
        </div>
      </Page>
    );
  },
});


RadioExample = createForm()(RadioExample);

export default RadioExample;
