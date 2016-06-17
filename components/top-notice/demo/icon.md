---
order: 2
title: 图标名称
---

显示成功, 错误, 信息, 警告, 问题 图标


````jsx
import { TopNotice, WhiteSpace } from 'antm';

const TopNoticeExample = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace mode={20} />
        <TopNotice type="info">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20} />
        <TopNotice type="warn">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20} />
        <TopNotice mode="closable" type="success">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20} />
        <TopNotice type="error">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20} />
        <TopNotice mode="link" type="question">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20} />
      </div>
    );
  }
});

ReactDOM.render(<TopNoticeExample />, mountNode);
````
