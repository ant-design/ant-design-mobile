import React from 'react';
import classNames from 'classnames';
import RcInputNumber from 'rc-input-number';
import splitObject from '../_util/splitObject';
export default class Stepper extends React.Component {
  static defaultProps = {
    prefixCls: 'am-stepper',
    step: 1,
    readOnly: true,
    showNumber: false,
    size: 'small',
  }

  componentDidMount() {
    this.refs.inputNumber.refs.input.setAttribute('disabled', true);
  }

  render() {
    let [{className, size}, restProps] = splitObject(this.props,
      ['className', 'size']);
    const stepperClass = classNames({
      [`${this.props.prefixCls}-lg`]: size === 'large',
      [`${this.props.prefixCls}-sm`]: size === 'small',
      [className]: !!className,
      ['showNumber']: !!this.props.showNumber,
    });

    return <RcInputNumber ref="inputNumber" className={stepperClass} {...restProps} />;
  }
}
