import { Steps, WingBlank } from 'antd-mobile';
const Step = Steps.Step;
import React from 'react';
import { View, ScrollView } from 'react-native';

export type StepItem = {
  title: string;
  description: string;
  status?: string;
};

export default class BasicTimelineExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      steps1: [
        {title: '已完成', description: '这里是信息的描述'},
        {title: '进行中', description: '这里是信息的描述'},
        {title: '待运行', description: '这里是信息的描述'},
      ],
      steps2: [
        {title: '已完成', description: '这里是信息的描述', status: 'finish'},
        {title: '进行中', description: '这里是信息的描述', status: 'process'},
        {title: '待运行', description: '这里是信息的描述', status: 'error'},
        {title: '再来一个待运行', description: '这里是信息的描述', status: 'wait'},
      ],
    };
  }

  getSteps(steps: Array<StepItem>  = []) {
    steps.map((item, index) => (
      <Step key={index} title={item.title} description={item.description} status={item.status} />
    ));
  }

  render() {
    const { steps1, steps2 } = this.state;
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{marginTop: 60}}>
          <WingBlank size="lg">
            <Steps size="small" current={1}>
              {this.getSteps(steps1)}
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps size="small">
              {this.getSteps(steps2)}
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps current={1}>
              {this.getSteps(steps1)}
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps>
              {this.getSteps(steps2)}
            </Steps>
          </WingBlank>
        </View>
      </ScrollView>
    );
  }
}
