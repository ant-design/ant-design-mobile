---
order: 0
title: 通告栏
---

分为 link 和 closable 类型

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
        <NoticeBar mode="closable" onClick={this.onClick}>
          国庆期间余额宝收益和转出到账时间
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="link" onClick={this.onClick}>
          国庆期间余额宝收益和转出到账时间
        </NoticeBar>
        <WhiteSpace size="lg" />
      </div>
    );
  },
});

ReactDOM.render(<NoticeBarExample />, mountNode);
````
