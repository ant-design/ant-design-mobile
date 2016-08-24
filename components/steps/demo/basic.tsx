import { WhiteSpace, Steps, WingBlank } from 'antd-mobile';
const Step = Steps.Step;
import * as React from 'react';
import { View, Text } from 'react-native';

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
        {title: '待运行', description: '这里是信息的描述', status: 'wait'},
        {title: '再来一个待运行', description: '这里是信息的描述', status: 'wait'},
      ],
    };
  }
  render() {
    return (<View>
      <View style={{width:300}}>
        <WhiteSpace size={32} style={{ backgroundColor: '#fff' }} />
        <WingBlank size={32}>
          <Text style={{ textAlign: 'left' }}>基本用法</Text>
        </WingBlank>
        <WhiteSpace size={20} style={{ backgroundColor: '#fff' }} />
        <WingBlank size={32}>
          <Steps current={1}>
            {
              this.state.steps1.map((item, index) => (
                <Step key={index} title={item.title} description={item.description} />
              ))
            }
          </Steps>
        </WingBlank>
      </View>

      <View style={{width:300, marginTop: 60}}>
        <WhiteSpace size={32} style={{ backgroundColor: '#fff' }} />
        <WingBlank size={32}>
          <Text style={{ textAlign: 'left' }}>size: small</Text>
        </WingBlank>
        <WhiteSpace size={20} style={{ backgroundColor: '#fff' }} />
        <WingBlank size={32}>
          <Steps current={1} size="small">
            {
              this.state.steps1.map((item, index) => (
                <Step key={index} title={item.title} description={item.description} />
              ))
            }
          </Steps>
        </WingBlank>
      </View>

      <View style={{width:300, marginTop: 60}}>
        <WhiteSpace size={32} style={{ backgroundColor: '#fff' }} />
        <WingBlank size={32}>
          <Text style={{ textAlign: 'left' }}>size: pointer</Text>
        </WingBlank>
        <WhiteSpace size={20} style={{ backgroundColor: '#fff' }} />
        <WingBlank size={32}>
          <Steps current={1} size="pointer">
            {
              this.state.steps1.map((item, index) => (
                <Step key={index} title={item.title} description={item.description} />
              ))
            }
          </Steps>
        </WingBlank>
      </View>

      <View style={{marginTop: 60}}>
        <WingBlank size={32}>
          <Text style={{ textAlign: 'left' }}>direction: vertical</Text>
        </WingBlank>
        <WhiteSpace size={20} style={{ backgroundColor: '#fff' }} />
        <WingBlank size={32}>
          <Steps direction="vertical">
            {
              this.state.steps2.map((item, index) => (
                <Step key={index} title={item.title} description={item.description} status={item.status} />
              ))
            }
          </Steps>
        </WingBlank>
      </View>

    </View>);
  }
}
