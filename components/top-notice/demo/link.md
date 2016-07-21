---
order: 1
title: 跳转
---

是否显示跳转箭头图标，点击之后会跳转到别的页面。

````jsx
import { TopNotice, WhiteSpace } from 'antm';

function linkClick() {
  // 这里配置跳转
}

const TopNoticeExample = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace size={20} />
        <TopNotice mode="link" onClick={linkClick}>
          国庆期间余额宝收益和转出到账时间
        </TopNotice>
        <WhiteSpace size={20} />
        <TopNotice mode="link" type="info">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace size={20} />
      </div>
    );
  },
});

ReactDOM.render(<TopNoticeExample />, mountNode);
````
