---
order: 0
title: 可关闭
---

是否显示关闭按钮，点击关闭图标后，隐藏该栏。

---

````jsx
import { TopNotice, WhiteSpace } from 'antm';

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
      <div>
        <WhiteSpace mode={20} />
        {TopNotice1}
        <WhiteSpace mode={20} />
        <TopNotice type="info" mode="closable">国庆期间余额宝收益和转出到账时间</TopNotice>
        <WhiteSpace mode={20} />
      </div>
    );
  }
});

ReactDOM.render(<TopNoticeExample />, mountNode);
````
