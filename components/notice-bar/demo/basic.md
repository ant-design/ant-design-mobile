---
order: 0
title:
  en-US: 'Notice Bar'
  zh-CN: 通告栏
---


````jsx
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';

const NoticeBarExample = () => (
  <div>
    <WhiteSpace size="lg" />
    <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 0.15rem' } }}>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
    </NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="link" onClick={() => alert('1')}>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
    </NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="closable" icon={null}>Remove the default icon.</NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
      Customized icon.
    </NoticeBar>
  </div>
);

ReactDOM.render(<NoticeBarExample />, mountNode);
````
