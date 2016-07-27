---
order: 0
title: 基本用法
---

基本的时间轴。

````jsx
import { Timeline, WingBlank, WhiteSpace } from 'antd-mobile';

let App = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace size={32} />
        <WingBlank size={32}>
          <Timeline>
            <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
            <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
            <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
            <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
          </Timeline>
        </WingBlank>
      </div>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````

<style>
  .demo-preview-wrapper .demo-preview-scroller * { box-sizing: border-box; }
</style>
