import * as React from 'react';
import RcInputNumber from 'rc-input-number/lib';
import StepProps from './StepPropTypes';
import styles from 'rc-input-number/lib/styles';

export default class Stepper extends React.Component<StepProps, any> {
  static defaultProps = {
    step: 1,
    readOnly: true,
    disabled: false,
    styles,
  };

  render() {
    return (
      <RcInputNumber {...this.props} />
    );
  }
}
