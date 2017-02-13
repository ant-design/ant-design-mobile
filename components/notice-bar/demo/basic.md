---
order: 0
title: 通告栏
---


````jsx
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';

const NoticeBarExample = React.createClass({
  onClick() {
    alert('clicked');
  },
  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
        <NoticeBar
          marqueeProps={{ loop: true, style: { padding: '0 0.15rem' } }}
        >
          国庆期间余额宝收益和转出到账时间通知：由于国庆到来，余额宝收益到账将延迟，特此通知
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="link" onClick={this.onClick}>
          国庆期间余额宝收益和转出到账时间
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="closable" icon={null}>去除 NoticeBar 默认的喇叭图标</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
          自定义 NoticeBar 前面的小图标
        </NoticeBar>
      </div>
    );
  },
});

ReactDOM.render(<NoticeBarExample />, mountNode);
````
