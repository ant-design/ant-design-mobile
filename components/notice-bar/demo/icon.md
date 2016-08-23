---
order: 2
title: 图标名称
---

显示成功, 错误, 信息, 警告, 问题 图标

````jsx
import { NoticeBar, WhiteSpace } from 'antd-mobile';

const NoticeBarExample = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace size={20} />
        <NoticeBar type="info">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size={20} />
        <NoticeBar type="warn">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size={20} />
        <NoticeBar mode="closable" type="success">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size={20} />
        <NoticeBar type="error">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size={20} />
        <NoticeBar mode="link" type="question">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size={20} />
      </div>
    );
  },
});

ReactDOM.render(<NoticeBarExample />, mountNode);
````
