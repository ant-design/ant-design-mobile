import * as React from 'react';
import classNames from 'classnames';
import RcInputNumber from 'rc-input-number';
import splitObject from '../_util/splitObject';
import StepProps from './stepPropTypes';

export default class Stepper extends React.Component<StepProps, any> {
  static defaultProps = {
    prefixCls: 'am-stepper',
    step: 1,
    readOnly: true,
    showNumber: false,
    size: 'small',
  };

  componentDidMount() {
    this.refs.inputNumber.refs.input.setAttribute('disabled', true);
  }

  render() {
    let [{prefixCls, className, size, showNumber}, restProps] = splitObject(
      this.props,
      ['prefixCls', 'className', 'size', 'showNumber']
    );
    const stepperClass = classNames({
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
      [className]: !!className,
      ['showNumber']: !!showNumber,
    });

    return (
      <RcInputNumber ref="inputNumber" prefixCls={prefixCls} className={stepperClass} {...restProps} />
    );
  }
}
