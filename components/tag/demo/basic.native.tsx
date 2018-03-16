// tslint:disable:jsx-no-multiline-js
/* tslint:disable:no-console */
import { Tag, WhiteSpace } from 'antd-mobile';
import React from 'react';
import { View } from 'react-native';

function onChange(selected: any) {
  console.log(`tag selected: ${selected}`);
}

export default class BasicTagExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Tag>Basic</Tag>
        <WhiteSpace />
        <Tag selected>Selected</Tag>
        <WhiteSpace />
        <Tag disabled>Disabled</Tag>
        <WhiteSpace />
        <Tag onChange={onChange}>Callback</Tag>
        <WhiteSpace />
        <Tag
          closable
          onClose={() => {
            console.log('onClose');
          }}
          afterClose={() => {
            console.log('afterClose');
          }}
        >
          Closable
        </Tag>
        <WhiteSpace />
        <Tag small>Small and Readonly</Tag>
      </View>
    );
  }
}
