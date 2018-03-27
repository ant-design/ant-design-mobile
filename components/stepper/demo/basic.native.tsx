// tslint:disable:jsx-no-multiline-js
/* tslint:disable:no-console */
import { List, Stepper } from 'antd-mobile';
import React from 'react';
import { View } from 'react-native';

function onChange(value: any) {
  console.log('changed', value);
}

export default class StepperExample extends React.Component<any, any> {
  render() {
    const readOnly = (
      <Stepper
        size="small"
        key="1"
        max={10}
        min={1}
        readOnly={false}
        defaultValue={1}
        onChange={onChange}
      />
    );
    return (
      <View style={{ marginTop: 20 }}>
        <List>
          <List.Item
            extra={
              <Stepper
                key="0"
                max={10}
                min={1}
                defaultValue={3}
                onChange={onChange}
              />
            }
          >
            readOnly: true
          </List.Item>
          <List.Item extra={readOnly}>readOnly: false</List.Item>
          <List.Item
            extra={
              <Stepper
                key="2"
                disabled
                max={10}
                min={1}
                defaultValue={3}
                onChange={onChange}
              />
            }
          >
            Disabled
          </List.Item>
        </List>
      </View>
    );
  }
}
