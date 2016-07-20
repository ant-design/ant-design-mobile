import { PropTypes } from 'react';
import * as React from 'react';
import { View, Slider } from 'react-native';
import SliderProps from './SliderPropsType';

export default class SliderAntm extends React.Component<SliderProps, any> {
  static propTypes = {
    onChange: PropTypes.func,
    onAfterChange: PropTypes.func,
    defaultValue: PropTypes.number,
    value: PropTypes.number,
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    onChange() {},
    onAfterChange() {},
    defaultValue: 0,
    disabled: false,
  };

  render() {
    const { defaultValue, value, min, max, step, disabled, onChange, onAfterChange } = this.props;
    return (<View>
        <Slider
          value = {defaultValue || value}
          minimumValue = {min}
          maximumValue = {max}
          step={step}
          minimumTrackTintColor={'#2db7f5'}
          maximumTrackTintColor={'#ccc'}
          disabled={disabled}
          onValueChange={onChange}
          onSlidingComplete = {onAfterChange}
        />
      </View>);
  }
}
