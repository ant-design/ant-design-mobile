import classnames from 'classnames';
import * as React from 'react';
import RMCInputNumber from 'rmc-input-number';
import Icon from '../icon';
import { StepPropsType } from './PropsType';

export interface StepProps extends StepPropsType {
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
  };

  stepperRef: RMCInputNumber | null;

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
        ref={el => (this.stepperRef = el)}
        className={stepperClass}
      />
    );
  }
}
