import React from 'react';
import classNames from 'classnames';
import RcInputNumber from 'rc-input-number';
import StepProps from './PropsType';
import Icon from '../icon';

export default class Stepper extends React.Component<StepProps, any> {
  static defaultProps = {
    prefixCls: 'am-stepper',
    step: 1,
    readOnly: false,
    showNumber: false,
    focusOnUpDown: false,
    useTouch: true,
  };

  stepperRef: any;

  render() {
    const { className, showNumber, ...restProps } = this.props;
    const stepperClass = classNames({
      [className as string]: !!className,
      ['showNumber']: !!showNumber,
    });

    return (
      <RcInputNumber
        upHandler={<Icon type="plus" size="xxs" />}
        downHandler={<Icon type="minus" size="xxs" />}
        {...restProps}
        ref={el => this.stepperRef = el}
        className={stepperClass}
      />
    );
  }
}
