/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { List, CaptchaItem } from '../../index.js';
import { createForm } from 'rc-form';

let CaptchaExample = React.createClass({
  getInitialState() {
    return {
      status: 'initial',
      status2: 'initial',
      status3: 'sending',
      status4: 'sending',
      pic: 'https://i.alipayobjects.com/i/ecmng/png/201501/49lsAmBWzl.png',
    };
  },
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        status3: 'sent',
        status4: 'sent',
        pic: 'https://i.alipayobjects.com/i/ecmng/png/201501/49lsAmBWzl.png'
      });
    }, 3000);
  },
  onSend() {
    console.log('onSend');
    this.setState({
      status: 'sending'
    });
    setTimeout(() => {
      this.setState({
        status: 'sent'
      });
    }, 1000);
  },
  onSend2() {
    console.log('onSend');
    this.setState({
      status2: 'sending'
    });
    setTimeout(() => {
      this.setState({
        status2: 'sent',
        pic: 'https://i.alipayobjects.com/i/ecmng/png/201501/49lsAmBWzl.png'
      });
    }, 3000);
  },
  onSend3() {
    console.log('onSend');
    this.setState({
      status3: 'sending'
    });
    setTimeout(() => {
      this.setState({
        status3: 'sent'
      });
    }, 1000);
  },
  onSend4() {
    console.log('onSend');
    this.setState({
      status4: 'sending'
    });
    setTimeout(() => {
      this.setState({
        status4: 'sent',
        pic: 'https://i.alipayobjects.com/i/ecmng/png/201501/49lsAmBWzl.png'
      });
    }, 3000);
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Page title="校验码" subtitle="&lt;CaptchaItem /&gt;">
        <List>
          <List.Body>
            <CaptchaItem
              mode="sms"
              status={this.state.status}
              onSend={this.onSend}
              {...getFieldProps('captcha')}
              maxLength={6}
              seconds={10}
              placeholder="输入短信校验码"
            >校验码</CaptchaItem>
            <CaptchaItem
              mode="figure"
              status={this.state.status2}
              onSend={this.onSend2}
              {...getFieldProps('captcha2')}
              maxLength={4}
              pic={this.state.pic}
              placeholder="输入右侧校验码"
            >校验码</CaptchaItem>
            <CaptchaItem
              mode="sms"
              status={this.state.status3}
              onSend={this.onSend3}
              {...getFieldProps('captcha3')}
              maxLength={6}
              seconds={10}
              placeholder="输入短信校验码"
            >校验码</CaptchaItem>
            <CaptchaItem
              {...getFieldProps('captcha4')}
              mode="figure"
              status={this.state.status4}
              onSend={this.onSend4}
              maxLength={4}
              pic={this.state.pic}
              placeholder="输入右侧校验码"
              error={true}
            >校验码</CaptchaItem>
          </List.Body>
        </List>
      </Page>
    );
  }
});

CaptchaExample = createForm()(CaptchaExample);

export default CaptchaExample;
