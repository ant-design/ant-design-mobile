// tslint:disable:jsx-no-multiline-js
import { Result } from 'antd-mobile';
import React from 'react';
import { Image, ScrollView, Text } from 'react-native';

export default class ResultExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#F5F5F9', flex: 1 }}>
        <Text style={{ margin: 10, color: '#999' }}>URI 图片</Text>
        <Result
          imgUrl={{
            uri:
              'https://zos.alipayobjects.com/rmsportal/GcBguhrOdlYvGfnsXgrE.png',
          }}
          title="验证成功"
          message="所提交内容已成功完成验证"
        />

        <Text style={{ margin: 10, color: '#999' }}>Image source</Text>
        <Result
          imgUrl={require('./alipay.png')}
          title="验证成功"
          message="所提交内容已成功完成验证"
        />

        <Text style={{ margin: 10, color: '#999' }}>Image element</Text>
        <Result
          img={
            <Image
              source={require('./alipay.png')}
              style={{ width: 60, height: 60 }}
            />
          }
          title="验证成功"
          message={<Text>所提交内容已成功完成验证</Text>}
        />

        <Text style={{ margin: 10, color: '#999' }}>含 button 操作</Text>
        <Result
          img={
            <Image
              source={require('./alipay.png')}
              style={{ width: 60, height: 60 }}
            />
          }
          title="验证成功"
          message="所提交内容已成功完成验证"
          buttonText="完成"
          buttonType="primary"
          buttonClick={(e: any) => alert(e.toString())}
        />
      </ScrollView>
    );
  }
}
