import { WhiteSpace, WingBlank, Button } from 'antd-mobile';
import * as React from 'react';
import { View } from 'react-native';

export default class BasicWhiteSpaceExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <WhiteSpace size="xs" />
        <WingBlank>
          <Button type="primary">上下留白xs</Button>
        </WingBlank>
        <WhiteSpace size="xs" />
        <View style={{
          borderBottomColor: '#108ee9',
          borderBottomWidth: 0.5,
        }}/>
        <WhiteSpace size="sm" />
        <WingBlank>
          <Button type="primary">上下留白sm</Button>
        </WingBlank>
        <WhiteSpace size="sm" />
        <View style={{
          borderBottomColor: '#108ee9',
          borderBottomWidth: 0.5,
        }}/>
        <WhiteSpace size="md" />
        <WingBlank>
          <Button type="primary">上下留白md(默认)</Button>
        </WingBlank>
        <WhiteSpace size="md" />
        <View style={{
          borderBottomColor: '#108ee9',
          borderBottomWidth: 0.5,
        }}/>
        <WhiteSpace size="lg" />
        <WingBlank>
          <Button type="primary">上下留白lg</Button>
        </WingBlank>
        <WhiteSpace size="lg" />
        <View style={{
          borderBottomColor: '#108ee9',
          borderBottomWidth: 0.5,
        }}/>
        <WhiteSpace size="xl" />
        <WingBlank>
          <Button type="primary">上下留白xl</Button>
        </WingBlank>
        <WhiteSpace size="xl" />
        <View style={{
          borderBottomColor: '#108ee9',
          borderBottomWidth: 0.5,
        }}/>
      </View>
    );
  }
}
