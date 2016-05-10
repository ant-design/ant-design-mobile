import React from 'react';
import classNames from 'classnames';
import RcInputNumber from './InputNumber';

export default class Stepper extends React.Component {
  static defaultProps = {
    prefixCls: 'am-stepper',
    step: 1,
  }

  render() {
    const { className, size, ...other } = this.props;
    const stepperClass = classNames({
      [`${this.props.prefixCls}-lg`]: size === 'large',
      [`${this.props.prefixCls}-sm`]: size === 'small',
      [className]: !!className,
    });

    return <RcInputNumber className={stepperClass} {...other} />;
  }
}
