---
order: 0
title: 通告栏
---


````jsx
import { NoticeBar, WhiteSpace } from 'antd-mobile';

const NoticeBarExample = React.createClass({
  onClick() {
    alert('clicked');
  },
  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
        <NoticeBar type="info">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar type="success" mode="closable" onClick={this.onClick}>国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar type="error">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar type="question" mode="link" onClick={this.onClick}>国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
      </div>
    );
  },
});

ReactDOM.render(<NoticeBarExample />, mountNode);
````
