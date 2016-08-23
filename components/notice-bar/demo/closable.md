---
order: 0
title: 可关闭
---

是否显示关闭按钮，点击关闭图标后，隐藏该栏。

````jsx
import { NoticeBar, WhiteSpace } from 'antd-mobile';

const NoticeBarExample = React.createClass({
  onClick() {
    alert('clicked');
  },
  render() {
    return (
      <div>
        <WhiteSpace size={20} />
        <NoticeBar mode="closable" onClick={this.onClick}>
          国庆期间余额宝收益和转出到账时间1
        </NoticeBar>
        <WhiteSpace size={20} />
        <NoticeBar type="info" mode="closable">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size={20} />
      </div>
    );
  },
});

ReactDOM.render(<NoticeBarExample />, mountNode);
````
