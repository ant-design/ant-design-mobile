---
order: 0
title: 类型、尺寸
---

主按钮和次按钮可独立使用，需要强引导用主按钮。

在有多个操作同时出现时，需要区分主次优先级，主按钮在同一个操作区域建议最多出现一次。

其他按钮类型有：`ghost`/`warning`；有单独的`loading`/`disabled`属性设置


````jsx
import { Button } from 'antd-mobile';

const ButtonExample = React.createClass({
  render() {
    return (
      <div style={{ margin: '0 8px' }}>

        <div style={{ margin: '32px 0' }}>
          <Button data-seed="logId">default 按钮</Button>
          <div style={{ height: 8 }} />
          <Button disabled>default disabled 按钮</Button>
        </div>

        <div style={{ margin: '32px 0' }}>
          <Button type="primary" onClick={e => console.log(e)}>primary 按钮</Button>
          <div style={{ height: 8 }} />
          <Button type="primary" disabled>primary disabled 按钮</Button>
        </div>

        <div style={{ margin: '32px 0' }}>
          <Button type="ghost" onClick={e => console.log(e)}>ghost 按钮</Button>
          <div style={{ height: 8 }} />
          <Button type="ghost" disabled>ghost disabled 按钮</Button>
        </div>

        <div style={{ margin: '32px 0' }}>
          <Button type="warning">warning 按钮</Button>
        </div>

        <div style={{ margin: '32px 0' }}>
          <Button loading>loading 按钮</Button>
        </div>

        <div style={{ margin: '32px 0' }}>
          <Button touchFeedback={false}>无点击反馈</Button>
          <div style={{ height: 8 }} />
          <Button touchFeedback={{ backgroundColor: 'red' }}>自定义点击反馈 style</Button>
        </div>

        <div style={{ margin: '32px 0' }}>
          <p className="demo-p">inline / small</p>
          <div style={{ height: 8 }} />
          <Button inline>default inline</Button>&nbsp;
          <Button inline size="small">default inline small</Button>
          <div style={{ height: 8 }} />
          <Button type="primary" inline>primary inline</Button>&nbsp;
          <Button type="primary" inline size="small">primary inline small</Button>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<ButtonExample />, mountNode);
````
