/* tslint:disable:no-console */
import React from 'react';
import { View } from 'react-native';
import { Tag, WhiteSpace } from 'antd-mobile';

function onChange(selected) {
  console.log(`tag selected: ${selected}`);
}

export default class BasicTagExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Tag>通用标签</Tag>
        <WhiteSpace />
        <Tag selected>默认选中标签</Tag>
        <WhiteSpace />
        <Tag disabled>失效标签</Tag>
        <WhiteSpace />
        <Tag onChange={onChange}>事件回调</Tag>
      </View>
    );
  }
}
