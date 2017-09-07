import React from 'react';
import RcInputNumber from 'rc-input-number/lib';
import StepProps from './PropsType';
import styles from 'rc-input-number/lib/styles';
import { Platform } from 'react-native';

export default class Stepper extends React.Component<StepProps, any> {
  static defaultProps = {
    step: 1,
    readOnly: false,
    disabled: false,
    styles,
    inputStyle: {},
  };

  render() {
    const inputAndroidStyle = Platform.OS === 'android' ? {
      top: 6,
      paddingTop: 0,
      height: 26,
    } : {};
    const { inputStyle, ...restProps } = this.props;
    const _inputStyle = {
      ...inputAndroidStyle,
      ...inputStyle,
    };
    return (
      <RcInputNumber {...restProps} inputStyle={_inputStyle} />
    );
  }
}
