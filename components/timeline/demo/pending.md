---
order: 2
title: 最后一个
---

在最后位置添加一个幽灵节点，表示时间轴未完成，还在记录过程中。可以指定 `pending={true}` 或者 `pending={一个 React 元素}`。

````jsx
import { Timeline, WingBlank, WhiteSpace } from 'antd-mobile';

let App = React.createClass({
  render() {
    return (
      <div>
        <WhiteSpace size={32} />
        <WingBlank size={32}>
          <Timeline pending={<a href="#">查看更多</a>}>
            <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
            <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
            <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
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
