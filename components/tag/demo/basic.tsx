import React from 'react';
import { View, Image, Text } from 'react-native';
import Tag from '../index';
import WhiteSpace from '../../white-space';

function onClose() {
  console.log('tag closing');
}

function afterClose() {
  console.log('tag closed');
}

function onChange(selected) {
  console.log(`tag selected: ${selected}`);
}

export default class BasicTagExample extends React.Component {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Tag type="action" size="large">大号标签</Tag>
        <WhiteSpace />
        <Tag type="action" size="large">
          <View style={{width: 16, height:16, marginTop: 8, marginLeft: 8}}>
            <Image
              source={{ uri: 'https://zos.alipayobjects.com/rmsportal/MNczMwOCZYCMeDR.png' }}
              style={{ width: 16, height:16 }}
            />
          </View>

          <Text>带图标的 tag</Text>
        </Tag>
        <WhiteSpace />
        <Tag type="action" size="small">小号标签</Tag>
        <WhiteSpace />
        <Tag type="read" size="large">只读标签大</Tag>
        <WhiteSpace />
        <Tag type="read" size="small">只读标签小</Tag>
        <WhiteSpace />
        <Tag type="action" size="large" closable>可关闭标签</Tag>
        <WhiteSpace />
        <Tag
          type="action"
          size="large"
          closable
          onClose={onClose}
          onChange={onChange}
          afterClose={afterClose}>事件</Tag>
        <WhiteSpace />
        <Tag type="action" disabled>不可点大标签</Tag>
        <WhiteSpace />
        <Tag type="action" size="small" disabled>不可点小标签</Tag>
        <WhiteSpace />
        <Tag type="action" size="large" selected>大号标签默认选中</Tag>
        <WhiteSpace />
        <Tag type="action" size="small" selected>小号标签默认选中</Tag>
        <WhiteSpace />
        <View style={{ flexDirection: 'row' }}>
          <Tag type="action" size="small" selected>两标签在一行</Tag>
          <Tag style={{ marginLeft: 8 }} type="action" size="small" selected>两标签在一行</Tag>
        </View>
      </View>
    );
  }
}
