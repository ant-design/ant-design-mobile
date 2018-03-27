import React from 'react';
import { Platform, StyleProp, ViewStyle } from 'react-native';
import RMCInputNumber from 'rmc-input-number/lib/index.ios';
import styles from 'rmc-input-number/lib/styles';
import { StepPropsType } from './PropsType';

export interface StepProps extends StepPropsType {
  styles?: typeof styles;
  style?: StyleProp<ViewStyle>;
}

export default class Stepper extends React.Component<StepProps, any> {
  static defaultProps: StepProps = {
    step: 1,
    readOnly: false,
    disabled: false,
    styles,
    inputStyle: {},
  };

  render() {
    const inputAndroidStyle =
      Platform.OS === 'android'
        ? {
            top: 6,
            paddingTop: 0,
            height: 26,
          }
        : {};
    const { inputStyle, ...restProps } = this.props;
    const keyboardType =
      Platform.OS === 'android' ? 'numeric' : 'numbers-and-punctuation';
    // tslint:disable-next-line:variable-name
    const _inputStyle = {
      ...inputAndroidStyle,
      ...inputStyle,
    };
    return (
      <RMCInputNumber
        {...restProps}
        keyboardType={keyboardType}
        inputStyle={_inputStyle}
      />
    );
  }
}
