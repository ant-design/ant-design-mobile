import { Button } from 'antm';
import React, { AppRegistry, Text } from 'react-native';


class BasicButtonExample extends React.Component {
  render() {
    return <Button><Text>basic button</Text></Button>;
  }
}

AppRegistry.registerComponent('basic', () => BasicButtonExample);
