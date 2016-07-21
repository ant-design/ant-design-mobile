import { WhiteSpace } from 'antm';
import * as React from 'react';
import { View, Text } from 'react-native';

import variables from '../../style/variables';

export default class BasicWhiteSpaceExample extends React.Component<any, any> {
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
        <WhiteSpace size={16} style={{ backgroundColor: variables.brand_6 }} />

        <Text style={{ textAlign: 'center' }}>
          32 point
        </Text>
        <WhiteSpace size={32} style={{ backgroundColor: variables.brand_6 }} />
      </View>
    );
  }
}
