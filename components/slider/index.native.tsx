import React from 'react';
import { View, Slider } from 'react-native';
import SliderProps from './PropsType';
import SliderStyle from './style/index.native';

export default class SliderAntm extends React.Component<SliderProps, any> {
  static defaultProps = {
    onChange() {},
    onAfterChange() {},
    defaultValue: 0,
    disabled: false,
    maximumTrackTintColor: SliderStyle.maximum.color,
    minimumTrackTintColor: SliderStyle.minimum.color,
  };

  render() {
    const {
      defaultValue, value, min, max, step, disabled, onChange, onAfterChange,
      maximumTrackTintColor, minimumTrackTintColor,
    } = this.props;
    return (
      <View>
        <Slider
          value={defaultValue || value}
          minimumValue={min}
          maximumValue={max}
          step={step}
          minimumTrackTintColor={minimumTrackTintColor}
          maximumTrackTintColor={maximumTrackTintColor}
          disabled={disabled}
          onValueChange={onChange}
          onSlidingComplete={onAfterChange}
        />
      </View>
    );
  }
}
