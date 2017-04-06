/* tslint:disable:no-console */
import React from 'react';
import { View, Text } from 'react-native';
import { SegmentedControl, WhiteSpace } from 'antd-mobile';

export default class BasicTagExample extends React.Component<any, any> {
  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }

  onValueChange = (value) => {
    console.log(value);
  }

  render() {
    return (
      <View style={{ paddingTop: 60, paddingHorizontal: 20 }}>
        <Text>禁用/disabled</Text>
        <SegmentedControl
          values={['切换一', '切换二']}
          disabled
        />
        <WhiteSpace size="lg" />
        <Text>设置 tintColor, style</Text>
        <SegmentedControl
          values={['切换一', '切换二', '切换三']}
          tintColor={'#ff0000'}
          style={{ height: 40, width: 280 }}
        />
        <WhiteSpace size="lg" />
        <Text>设置默认选中 selectedIndex</Text>
        <SegmentedControl
          selectedIndex={1}
          values={['切换一', '切换二', '切换三']}
        />
        <WhiteSpace size="lg" />
        <Text>事件 onChange/onValueChange</Text>
        <SegmentedControl
          values={['切换一', '切换二', '切换三']}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
      </View>
    );
  }
}
