import { Button } from 'antm';
import React, { AppRegistry, View } from 'react-native';

// entry file is independent
class BasicButtonExample extends React.Component {
  render() {
    return (
      <View>
        <Button mode="red" size="tiny">红色26px按钮</Button>
        <Button mode="white" size="little">白色31px按钮</Button>
        <Button mode="light" size="small">蓝边36px按钮</Button>
        <Button mode="blue" size="middle">蓝色40px按钮</Button>
        <Button>默认蓝色43px按钮</Button>
        <Button disabled>不可点击按钮</Button>
        <View style={{ flexDirection: 'row' }}>
          <Button mode="white" style={{ flex: 0.5 }}>次按钮</Button>
          <Button mode="blue" style={{ flex: 0.5 }}>主按钮</Button>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button mode="light" size="tiny">最小号按钮</Button>
          <Button mode="blue" size="tiny">最小号按钮</Button>
          <View style={{ flex: 1 }} />
        </View>
        <Button mode="warn" size="flat">警示按钮</Button>
        <Button disabled mode="warn" size="flat">警示按钮不可点</Button>
      </View>
    );
  }
}

exports.title = 'Button';
exports.description = 'button example';
exports.demo = BasicButtonExample;

AppRegistry.registerComponent('basic.rn', () => BasicButtonExample);
