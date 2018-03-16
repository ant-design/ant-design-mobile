import React from 'react';
import { Slider, View } from 'react-native';
import { SliderPropsType } from './PropsType';
import SliderStyle from './style/index.native';

export interface SliderProps extends SliderPropsType {
  maximumTrackTintColor?: string;
  minimumTrackTintColor?: string;
}

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
      defaultValue,
      value,
      min,
      max,
      step,
      disabled,
      onChange,
      onAfterChange,
      maximumTrackTintColor,
      minimumTrackTintColor,
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
