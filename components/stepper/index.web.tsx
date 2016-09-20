import React from 'react';
import classNames from 'classnames';
import objectAssign from 'object-assign';
import RcInputNumber from 'rc-input-number';
import StepProps from './StepPropTypes';

export default class Stepper extends React.Component<StepProps, any> {
  static defaultProps = {
    prefixCls: 'am-stepper',
    step: 1,
    readOnly: false,
    showNumber: false,
  };

  render() {
    const { prefixCls, className, showNumber } = this.props;
    const stepperClass = classNames({
      [className]: !!className,
      ['showNumber']: !!showNumber,
    });

    const restProps = objectAssign({}, this.props);
    ['className', 'prefixCls', 'showNumber'].forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });

    return (
      <RcInputNumber
        ref="inputNumber"
        prefixCls={prefixCls}
        className={stepperClass}
        {...restProps}
      />
    );
  }
}
