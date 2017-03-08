/* tslint:disable:no-unused-variable */
import React from 'react';
/* tslint:enable:no-unused-variable */
import { View, Text, Alert } from 'react-native';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

/* tslint:disable:no-console */
export default () => (
  <View style={{marginTop: 80}}>
    <WhiteSpace />
    <WingBlank>
      <Button onClick={() => { Alert.alert( 'Button', 'button clicked' ); }}>default button</Button>
      <WhiteSpace />
      <Button type="primary">primary button</Button>
      <WhiteSpace />
      <Button type="warning">warning button</Button>
      <WhiteSpace />
      <Button disabled>disable button</Button>
      <WhiteSpace />
      <Button activeStyle={false}>无点击反馈</Button>
      <WhiteSpace />
      <Button activeStyle={{ backgroundColor: 'red' }}>自定义点击反馈 style</Button>
      <WhiteSpace />
      <Button loading>loading button</Button>
    </WingBlank>

    <WingBlank style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text>小按钮</Text>
      <Button type="ghost" size="small">ghost small button</Button>
    </WingBlank>

  </View>
);
