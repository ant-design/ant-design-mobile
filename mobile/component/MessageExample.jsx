import React from 'react';
import Page from '../common/Page';
import { Message, WhiteSpace } from '../../index.js';

const MessageExample = React.createClass({
  render() {
    return (
      <Page title="信息提示" subtitle="&lt;Message type='success' /&gt;">
        <Message
          type="success"
          main="国庆期间余额宝收益和转出到账时间"
          sub="驳回原因：内容"
        />
        <WhiteSpace mode={20}/>
        <Message
          type="pay"
          main="国庆期间余额宝收益和转出到账时间"
          sub="国庆期间余额宝收益和转出到账时间"
        />
        <WhiteSpace mode={20}/>
        <Message
          type="error"
          main="国庆期间余额宝收益和转出到账时间"
          sub="国庆期间余额宝收益和转出到账时间"
        />
        <WhiteSpace mode={20}/>
        <Message
          type="warn"
          main="国庆期间余额宝收益和转出到账时间"
          sub="国庆期间余额宝收益和转出到账时间"
        />
        <WhiteSpace mode={20}/>
        <Message
          type="info"
          main="国庆期间余额宝收益和转出到账时间"
          sub="驳回原因：内容"
        />
        <WhiteSpace mode={20}/>
        <Message
          type="question"
          main="国庆期间余额宝收益和转出到账时间"
          sub="国庆期间余额宝收益和转出到账时间"
        />
        <WhiteSpace mode={20}/>
        <Message
          type="wait"
          main="国庆期间余额宝收益和转出到账时间"
          sub="国庆期间余额宝收益和转出到账时间"
        />
      </Page>
    );
  },
});

export default MessageExample;
