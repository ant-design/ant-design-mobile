import React, { AppRegistry, View, Text } from 'react-native';
import { WhiteSpace, WingBlank } from 'antm';

const variables = require('../../style/variables');

class BasicWingBlankExample extends React.Component {
  render() {
    return (
      <View>
        <WhiteSpace />
        <WingBlank>
          <Text style={{ textAlign: 'center', backgroundColor: variables.brand_6 }}>
            两翼留白8px
          </Text>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={20}>
          <Text style={{ textAlign: 'center', backgroundColor: variables.brand_6 }}>
            两翼留白20px
          </Text>
        </WingBlank>
        <WhiteSpace />
        <WingBlank mode={32}>
          <Text style={{ textAlign: 'center', backgroundColor: variables.brand_6 }}>
            两翼留32px
          </Text>
        </WingBlank>
        <WhiteSpace />
      </View>
    );
  }
}

AppRegistry.registerComponent('basic', () => BasicWingBlankExample);
