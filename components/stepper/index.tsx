import React from 'react';
import RcInputNumber from 'rc-input-number/lib';
import objectAssign from 'object-assign';
import StepProps from './PropsType';
import styles from 'rc-input-number/lib/styles';
import { Platform } from 'react-native';

export default class Stepper extends React.Component<StepProps, any> {
  static defaultProps = {
    step: 1,
    readOnly: false,
    disabled: false,
    styles,
  };

  render() {
    const restProps = objectAssign({}, this.props);
    const inputAndroidStyle = Platform.OS === 'android' ? {
      top: 6,
      paddingTop: 0,
      height: 26,
    } : {};
    const inputStyle = objectAssign({}, inputAndroidStyle, this.props.inputStyle);
    delete restProps.inputStyle;

    return (
      <RcInputNumber {...restProps} inputStyle={inputStyle} />
    );
  }
}
