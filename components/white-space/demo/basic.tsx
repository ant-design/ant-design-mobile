import { WhiteSpace } from 'antm';
import React from 'react';
import { View, Text } from 'react-native';

const variables = require('../../style/variables');

export default class BasicWhiteSpaceExample extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>
          default 8 point
        </Text>
        <WhiteSpace style={{ backgroundColor: variables.brand_6 }} />

        <Text style={{ textAlign: 'center' }}>
          16 point
        </Text>
        <WhiteSpace mode={16} style={{ backgroundColor: variables.brand_6 }} />

        <Text style={{ textAlign: 'center' }}>
          32 point
        </Text>
        <WhiteSpace mode={32} style={{ backgroundColor: variables.brand_6 }} />
      </View>
    );
  }
}

export const title = 'WhiteSpace';
export const description = 'Basic WhiteSpace Example';
