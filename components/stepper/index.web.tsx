import * as React from 'react';
import classNames from 'classnames';
import RcInputNumber from 'rc-input-number';
import StepProps from './StepPropTypes';

export default class Stepper extends React.Component<StepProps, any> {
  static defaultProps = {
    prefixCls: 'am-stepper',
    step: 1,
    readOnly: true,
    showNumber: false,
    size: 'small',
  };

  componentDidMount() {
    (this.refs as any).inputNumber.refs.input.setAttribute('disabled', true);
  }

  render() {
    const { prefixCls, className, size, showNumber } = this.props;
    const stepperClass = classNames({
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
      [className]: !!className,
      ['showNumber']: !!showNumber,
    });

    const restProps = Object.assign({}, this.props);
    ['className', 'prefixCls', 'size', 'showNumber'].forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });

    return (
      <RcInputNumber
        ref="inputNumber"
        prefixCls={prefixCls}
        className={stepperClass}
        size={size}
        {...restProps}
      />
    );
  }
}
