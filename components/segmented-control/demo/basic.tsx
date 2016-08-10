/* tslint:disable:no-console */
import * as React from 'react';
import { View } from 'react-native';
import { SegmentedControl } from 'antd-mobile';

function onChange(e) {
  console.log(e.nativeEvent);
}

function onValueChange(value) {
  console.log('onValueChange');
  console.log(value);
}

export default class BasicTagExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ padding: 80 }}>
        <SegmentedControl
          selectedIndex={1}
          values={['切换一', '切换二']}
          onChange={onChange}
          onValueChange={onValueChange}
        />
      </View>
    );
  }
}
