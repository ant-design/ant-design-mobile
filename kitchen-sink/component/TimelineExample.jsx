/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { Timeline, WhiteSpace, WingBlank } from 'antm';

let TimelineExample = React.createClass({
  render () {
    return (
      <Page title="时间线" subtitle="&lt;Timeline&gt;&lt;Timeline.Item&gt;&lt;/Timeline.Item&gt;&lt;/Timeline&gt;">
        <WhiteSpace mode={32} />
        <WingBlank mode={32}>
          <h4>基本用法</h4>
          <Timeline>
            <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
            <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
            <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
            <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
          </Timeline>
        </WingBlank>
        <WhiteSpace mode={32} />
        <WingBlank mode={32}>
          <h4>设定圆圈颜色</h4>
          <Timeline>
            <Timeline.Item color="green">绿色圆圈表示已完成、成功状态 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">绿色圆圈表示已完成、成功状态 2015-09-01</Timeline.Item>
            <Timeline.Item color="orange">
              <p>橙色表示告警或者错误状态</p>
            </Timeline.Item>
            <Timeline.Item>
              <p>蓝色表示正在进行或者其他默认状态</p>
              <p>蓝色表示正在进行或者其他默认状态</p>
            </Timeline.Item>
          </Timeline>
        </WingBlank>
        <WhiteSpace mode={32} />
        <WingBlank mode={32}>
          <h4>在最后位置添加一个幽灵节点</h4>
          <Timeline pending={<a href="#">查看更多</a>}>
            <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
            <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
            <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
          </Timeline>
        </WingBlank>
      </Page>
    )
  }
});

export default TimelineExample;
