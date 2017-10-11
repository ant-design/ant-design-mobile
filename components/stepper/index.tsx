import React from 'react';
import classnames from 'classnames';
import RMCInputNumber from 'rmc-input-number';
import BasePropsType from './PropsType';
import Icon from '../icon';

export interface StepProps extends BasePropsType {
  prefixCls?: string;
  showNumber?: boolean;
  className?: string;
}

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
    const stepperClass = classnames(className, {
      ['showNumber']: !!showNumber,
    });

    return (
      <RMCInputNumber
        upHandler={<Icon type="plus" size="xxs" />}
        downHandler={<Icon type="minus" size="xxs" />}
        {...restProps}
        ref={el => this.stepperRef = el}
        className={stepperClass}
      />
    );
  }
}
