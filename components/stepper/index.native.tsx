import React from 'react';
import RcInputNumber from 'rc-input-number/lib';
import StepProps from './PropsType';
import styles from 'rc-input-number/lib/styles';
import { Platform } from 'react-native';
import omit from 'omit.js';

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
    const inputStyle = {
      ...inputAndroidStyle,
      ...this.props.inputStyle,
    };
    const restProps = omit(this.props, ['inputStyle']);
    return (
      <RcInputNumber {...restProps} inputStyle={inputStyle} />
    );
  }
}
