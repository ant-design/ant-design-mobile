import * as React from 'react'
import { unstable_NoticeBar as NoticeBar } from '@ant-design/mobile'

import './basic.less'

export default () => (
  <div className="notice-demo-container">
    <h3>文字超出无限滚动</h3>
    <NoticeBar animateLoop>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be
      delayed during National Day. Notice2: The arrival time of incomes and
      transfers of Yu &#39;E Bao will be delayed during National Day.
    </NoticeBar>
    <h3>文字超出不滚动</h3>
    <NoticeBar>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be
      delayed during National Day. Notice2: The arrival time of incomes and
      transfers of Yu &#39;E Bao will be delayed during National Day.
    </NoticeBar>
    <hr />
    <h3>蓝色，有点击事件</h3>
    <NoticeBar type="active" mode="link" onPress={() => console.log('1')}>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be
      delayed during National Day.
    </NoticeBar>
    <h3>error，有点击事件</h3>
    <NoticeBar type="active" mode="link" onPress={() => console.log('1')}>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be
      delayed during National Day.
    </NoticeBar>
    <hr />
    <NoticeBar type="error" mode="link" onPress={() => console.log('1')}>
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be
      delayed during National Day.
    </NoticeBar>
    <hr />
    <h3>去掉icon，可关闭</h3>
    <NoticeBar mode="closable" icon={null}>
      Remove the default icon.
    </NoticeBar>
    <NoticeBar mode="closable" icon={null} actionLeft="查看详情">
      Remove the default icon.
    </NoticeBar>
    <h3>自定义行动文字</h3>
    <NoticeBar
      mode="closable"
      action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}
    >
      Closable demo for `actionText`.
    </NoticeBar>
    <br />
    <NoticeBar mode="link" action="去看看">
      Link demo for `actionText`.
    </NoticeBar>
    <br />
    <NoticeBar type="active" mode="link" actionLeft="不看" action="去看看">
      Link demo for `actionText`.
    </NoticeBar>
    <br />
    <h3>胶囊</h3>
    <NoticeBar capsule onPress={() => console.log('2')}>
      Link demo for `actionText`.
    </NoticeBar>
    <br />
    <NoticeBar
      type="active"
      capsule
      items={[
        'https://gw.alipayobjects.com/mdn/rms_778165/afts/img/A*A2imS5V689AAAAAAAAAAAABkARQnAQ',
        'https://gw.alipayobjects.com/mdn/rms_778165/afts/img/A*KFsHQ6esnx4AAAAAAAAAAABkARQnAQ',
      ]}
    >
      Link demo for `actionText`.
    </NoticeBar>
    <br />
    <h3>蓝色的消息更新通知</h3>
    <NoticeBar tip type="active">
      更新消息20条
    </NoticeBar>
  </div>
)
