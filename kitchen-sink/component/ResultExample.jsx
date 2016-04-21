import React from 'react';
import Page from '../common/Page';
import { Result, WhiteSpace } from 'antm';

const ResultExample = React.createClass({
  render() {
    return (
      <Page title="结果提示" subtitle="&lt;Result type='success' main='成功' /&gt;">
        <Result
          type="pay"
          main="pay-支付成功"
          sub="50.00元"
          brief="当前可用额度6,000.00元"
        />
        <WhiteSpace/>
        <Result
          type="success"
          main="success-成功"
          brief="您的操作已经成功"
        />
        <WhiteSpace/>
        <Result
          type="error"
          main="error-失败"
        />
        <WhiteSpace/>
        <Result
          type="warn"
          main="warn-警告"
        />
        <WhiteSpace/>
        <Result
          type="info"
          main="info-提示"
        />
        <WhiteSpace/>
        <Result
          type="question"
          main="question-疑问"
        />
        <WhiteSpace/>
        <Result
          type="wait"
          main="wait-等待"
          brief="已提交申请，等待银行处理"
        />
      </Page>
    );
  },
});

export default ResultExample;
