import React from 'react';
import Page from '../common/Page';
import { TopNotice, WhiteSpace } from 'antm';

function linkClick() {
  alert(22222);
}

const TopNoticeExample = React.createClass({
  getInitialState() {
    return {
      show: true
    };
  },
  hideNotice() {
    this.setState({
      show: false,
    });
  },
  render() {
    const TopNotice1 = this.state.show ? (
      <TopNotice mode="closable" onClick={this.hideNotice}>
        国庆期间余额宝收益和转出到账时间1
      </TopNotice>
    ) : null;
    return (
      <Page title="顶部提示" subtitle="&lt;TopNotice mode='operation' /&gt;">
        {TopNotice1}
        <WhiteSpace mode={20}/>
        <TopNotice mode="link" onClick={linkClick}>
          国庆期间余额宝收益和转出到账时间
        </TopNotice>
        <WhiteSpace mode={20}/>
        <TopNotice type="info">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20}/>
        <TopNotice type="warn">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20}/>
        <TopNotice type="success">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20}/>
        <TopNotice type="error">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20}/>
        <TopNotice type="question">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20}/>
      </Page>
    );
  },
});

export default TopNoticeExample;
