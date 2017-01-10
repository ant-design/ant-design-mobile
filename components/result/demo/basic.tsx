import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { Result } from 'antd-mobile';

export default class ResultExample extends React.Component<any, any> {
  render() {
    return (<ScrollView style={{ backgroundColor: '#F5F5F9', flex: 1 }}>
      <Text style={{ margin: 10, color: '#999' }}>uri</Text>
      <Result
        imgUrl={{uri: 'https://zos.alipayobjects.com/rmsportal/GcBguhrOdlYvGfnsXgrE.png'}}
        title="验证成功"
        message="所提交内容已成功完成验证"
      />

      <Text style={{ margin: 10, color: '#999' }}>require</Text>
      <Result
        imgUrl={require('./alipay@3x.png')}
        title="验证成功"
        message="所提交内容已成功完成验证"
      />

      <Text style={{ margin: 10, color: '#999' }}>img</Text>
      <Result
        img={<Image source={require('./alipay@3x.png')} style={{ width: 60, height: 60 }} />}
        title="验证成功"
        message={<Text>所提交内容已成功完成验证</Text>}
      />

      <Text style={{ margin: 10, color: '#999' }}>button</Text>
      <Result
        img={<Image source={require('./alipay@3x.png')} style={{ width: 60, height: 60 }} />}
        title="验证成功"
        message="所提交内容已成功完成验证"
        buttonText="完成"
        buttonType="primary"
        buttonClick={e => alert(e.toString())}
      />
    </ScrollView>);
  }
}
