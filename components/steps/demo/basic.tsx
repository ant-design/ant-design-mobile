/* tslint:disable:jsx-no-multiline-js */
import { Steps, WingBlank } from 'antd-mobile';
const Step = Steps.Step;
import React from 'react';
import { View, ScrollView, Text } from 'react-native';

export default class BasicTimelineExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      steps1: [
        { title: 'Finished', description: 'This is description' },
        { title: 'In Progress', description: 'This is description' },
        { title: 'Waiting', description: 'This is description' },
      ],
      steps2: [
        { title: 'Finished', description: 'This is description', status: 'finish' },
        { title: 'In Progress', description: 'This is description', status: 'process' },
        { title: 'Waiting', description: 'This is description', status: 'error' },
        { title: 'Waiting', description: 'This is description', status: 'wait' },
      ],
    };
  }
  render() {
    return (<ScrollView
      style={{ flex: 1 }}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ marginTop: 60 }}>
        <WingBlank size="lg">
          <Steps size="small" current={1}>
            {
              this.state.steps1.map((item, index) => (
                <Step
                  key={index}
                  title={<View><Text>title:{item.title}</Text></View>}
                  description={<View><Text>desc:{item.description}</Text></View>}
                  status={item.status}
                />
              ))
            }
          </Steps>
        </WingBlank>
      </View>
      <View>
        <WingBlank size="lg">
          <Steps size="small">
            {
              this.state.steps2.map((item, index) => (
                <Step key={index} title={item.title} description={item.description} status={item.status} />
              ))
            }
          </Steps>
        </WingBlank>
      </View>
      <View>
        <WingBlank size="lg">
          <Steps current={1}>
            {
              this.state.steps1.map((item, index) => (
                <Step key={index} title={item.title} description={item.description} status={item.status} />
              ))
            }
          </Steps>
        </WingBlank>
      </View>
      <View>
        <WingBlank size="lg">
          <Steps>
            {
              this.state.steps2.map((item, index) => (
                <Step key={index} title={item.title} description={item.description} status={item.status} />
              ))
            }
          </Steps>
        </WingBlank>
      </View>
    </ScrollView>);
  }
}
