/* tslint:disable:no-console */
import * as React from 'react';
import { View } from 'react-native';
import { Badge, WhiteSpace } from 'antm';

export default class BasicTagExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ padding: 20}}>

        <Badge text={9}>
          <View style={{ width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' }} />
        </Badge>

        <WhiteSpace />
        <WhiteSpace />

        <Badge text={109} overflowCount ={100}>
          <View style={{ width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' }} />
        </Badge>

        <WhiteSpace />
        <WhiteSpace />

        <Badge text={109}>
          <View style={{ width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' }} />
        </Badge>

        <WhiteSpace />
        <WhiteSpace />

        <Badge text="new">
          <View style={{ width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' }} />
        </Badge>

        <WhiteSpace />
        <WhiteSpace />

        <Badge text={109} dot>
          <View style={{ width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' }} />
        </Badge>

        <WhiteSpace />
        <WhiteSpace />

        <Badge text={109} dot size="large">
          <View style={{ width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' }} />
        </Badge>

        <WhiteSpace />
        <WhiteSpace />

        <Badge text={33} corner>
          <View style={{ width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' }} />
        </Badge>

        <WhiteSpace />
        <WhiteSpace />

        <Badge text="new" corner size="large">
          <View style={{ width: 72, height: 72, backgroundColor: 'rgba(255, 140, 101, 0.15)' }} />
        </Badge>

      </View>
    );
  }
}
