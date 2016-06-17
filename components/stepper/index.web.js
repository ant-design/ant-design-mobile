import React from 'react';
import classNames from 'classnames';
import RcInputNumber from 'rc-input-number';

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
    const { className, size, ...other } = this.props;
    const stepperClass = classNames({
      [`${this.props.prefixCls}-lg`]: size === 'large',
      [`${this.props.prefixCls}-sm`]: size === 'small',
      [className]: !!className,
      ['showNumber']: !!this.props.showNumber,
    });

    return <RcInputNumber ref="inputNumber" className={stepperClass} {...other} />;
  }
}
