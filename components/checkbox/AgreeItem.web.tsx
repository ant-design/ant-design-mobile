import React from 'react';
import classNames from 'classnames';
import Checkbox from './Checkbox.web';
import { AgreeItemPropsType } from './PropsType';
import getDataAttr from '../_util/getDataAttr';
import omit from 'omit.js';

export default class AgreeItem extends React.Component<AgreeItemPropsType, any> {
  static defaultProps = {
    prefixCls: 'am-checkbox',
  };

  render() {
    const { prefixCls, style, className, name, children } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-agree`]: true,
      [className as string]: className,
    });
    const otherProps = omit(this.props, ['style', 'className']);

    return (<div {...getDataAttr(this.props)} className={wrapCls} style={style}>
      <label className={`${prefixCls}-agree-label`} htmlFor={name}>
        <Checkbox {...otherProps} />
        {children}
      </label>
    </div>);
  }
}
