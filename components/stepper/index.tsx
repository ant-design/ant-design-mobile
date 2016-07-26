import * as React from 'react';
import RcInputNumber from 'rc-input-number/lib';
import splitObject from '../_util/splitObject';
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
    let [{ styles}, restProps] = splitObject(this.props, ['styles']);

    return (
      <RcInputNumber styles={styles} {...restProps} />
    );
  }
}
