import { Slider } from 'antd-mobile';
import React from 'react';
import { Text, View } from 'react-native';

export default class BasicSliderExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      changingValue: 0.25,
      changedValue: 0.15,
      minMaxValue: 0,
      slideCompletionCount: 0,
    };
  }

  handleChange = (value: any) => {
    this.setState({
      changingValue: value,
    });
  }

  onAfterChange = (value: any) => {
    this.setState({
      changedValue: value,
    });
  }

  minMaxChange = (value: any) => {
    this.setState({
      minMaxValue: value,
    });
  }

  render() {
    return (
      <View>
        <View>
          <Text>Default settings</Text>
          <Slider />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>Initial value: 0.5</Text>
          <Slider defaultValue={0.5} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>min: 0, max: 1, current Value: {this.state.minMaxValue}</Text>
          <Slider
            min={0}
            max={1}
            onAfterChange={(value: any) => this.minMaxChange(value)}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>step: 0.25</Text>
          <Slider step={0.25} value={0.25} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>disabled</Text>
          <Slider disabled defaultValue={0.25} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>onChange value: {this.state.changingValue}</Text>
          <Slider
            defaultValue={0.25}
            onChange={(value: any) => this.handleChange(value)}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>onAfterChange value: {this.state.changedValue}</Text>
          <Slider
            defaultValue={0.15}
            onAfterChange={(value: any) => this.onAfterChange(value)}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>custom color: </Text>
          <Slider
            defaultValue={0.15}
            minimumTrackTintColor="red"
            maximumTrackTintColor="blue"
          />
        </View>
      </View>
    );
  }
}
