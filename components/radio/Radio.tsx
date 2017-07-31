import React from 'react';
import RcCheckbox from 'rc-checkbox';
import { RadioProps } from './PropsType';
import omit from 'omit.js';
import classNames from 'classnames';

export default class Radio extends React.Component<RadioProps, any> {
  static RadioItem: any;

  static defaultProps = {
    prefixCls: 'am-radio',
    wrapLabel: true,
  };

  render() {
    const { prefixCls, className, style, children } = this.props;
    const wrapCls = classNames({
      [className as string]: !!className,
      [`${prefixCls}-wrapper`]: true,
    });
    const mark = (
      <label className={wrapCls} style={style}>
        <RcCheckbox {...omit(this.props, ['className', 'style'])} type="radio" />
        {children}
      </label>
    );
    if (this.props.wrapLabel) {
      return mark;
    }
    return <RcCheckbox {...this.props} type="radio" />;
  }
}
