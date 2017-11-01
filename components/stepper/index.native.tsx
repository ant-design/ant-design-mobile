import BasePropsType from './PropsType';
import { Platform } from 'react-native';
import RMCInputNumber from 'rmc-input-number/lib/index.ios';
import React from 'react';
import styles from 'rmc-input-number/lib/styles';

export interface StepProps extends BasePropsType {
  styles?: typeof styles;
}

export default class Stepper extends React.Component<StepProps, any> {
  static defaultProps = {
    step: 1,
    readOnly: false,
    disabled: false,
    styles,
    inputStyle: {},
  } as StepProps;

  render() {
    const inputAndroidStyle = Platform.OS === 'android' ? {
      top: 6,
      paddingTop: 0,
      height: 26,
    } : {};
    const { inputStyle, ...restProps } = this.props;
    const keyboardType = Platform.OS === 'android' ? 'numeric' : 'numbers-and-punctuation';
    const _inputStyle = {
      ...inputAndroidStyle,
      ...inputStyle,
    };
    return (
      <RMCInputNumber {...restProps} keyboardType={keyboardType} inputStyle={_inputStyle} />
    );
  }
}
