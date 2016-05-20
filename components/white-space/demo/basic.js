import { WhiteSpace } from 'antm';
import React, { View, AppRegistry, Text } from 'react-native';

const variables = require('../../style/variables');

class BasicWhiteSpaceExample extends React.Component {
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

AppRegistry.registerComponent('basic', () => BasicWhiteSpaceExample);
