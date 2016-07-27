---
order: 0
title: 可关闭
---

是否显示关闭按钮，点击关闭图标后，隐藏该栏。

````jsx
import { TopNotice, WhiteSpace } from 'antd-mobile';

const TopNoticeExample = React.createClass({
  onClick() {
    alert('clicked');
  },
  render() {
    return (
      <div>
        <WhiteSpace size={20} />
        <TopNotice mode="closable" onClick={this.onClick}>
          国庆期间余额宝收益和转出到账时间1
        </TopNotice>
        <WhiteSpace size={20} />
        <TopNotice type="info" mode="closable">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace size={20} />
      </div>
    );
  },
});

ReactDOM.render(<TopNoticeExample />, mountNode);
````
