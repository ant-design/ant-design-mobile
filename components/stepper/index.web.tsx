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
  };

  render() {
    const { className, showNumber, ...restProps } = this.props;
    const stepperClass = classNames({
      [className as string]: !!className,
      ['showNumber']: !!showNumber,
    });

    return (
      <RcInputNumber
        upHandler={<Icon type={require('./style/assets/plus.svg')} size="xxs" />}
        downHandler={<Icon type={require('./style/assets/minus.svg')} size="xxs" />}
        useTouch
        {...restProps}
        ref="inputNumber"
        className={stepperClass}
      />
    );
  }
}
