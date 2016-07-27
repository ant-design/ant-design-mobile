import { WhiteSpace, Timeline, WingBlank } from 'antd-mobile';
import * as React from 'react';
import { View, Text } from 'react-native';

export default class BasicTimelineExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <WhiteSpace size={32} style={{ backgroundColor: '#fff' }} />
        <WingBlank size={32}>
          <Text style={{ textAlign: 'left' }}>basic mode</Text>
        </WingBlank>
        <WhiteSpace size={20} style={{ backgroundColor: '#fff' }} />
        <WingBlank size={32}>
          <Timeline>
            <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
            <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
            <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
            <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
          </Timeline>
        </WingBlank>
        <WhiteSpace size={20} style={{ backgroundColor: '#fff' }} />
        <WingBlank size={32}>
          <Text style={{ textAlign: 'left' }}>color mode</Text>
        </WingBlank>
        <WhiteSpace size={20} style={{ backgroundColor: '#fff' }} />
        <WingBlank size={32}>
          <Timeline>
            <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
            <Timeline.Item color="blue">初步排除网络异常 2015-09-01</Timeline.Item>
            <Timeline.Item color="orange">技术测试异常 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">网络异常正在修复 2015-09-01</Timeline.Item>
          </Timeline>
        </WingBlank>
      </View>
    );
  }
}
