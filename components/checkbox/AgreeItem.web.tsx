import React from 'react';
import classNames from 'classnames';
import Checkbox from './Checkbox.web';
import { AgreeItemPropsType } from './PropsType';
import getDataAttr from '../_util/getDataAttr';

export default class AgreeItem extends React.Component<AgreeItemPropsType, any> {
  static defaultProps = {
    prefixCls: 'am-checkbox',
  };

  render() {
    let { prefixCls, style, name, defaultChecked, checked, disabled, children, onChange, className } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-agree`]: true,
      [className as string]: className,
    });

    return (<div {...getDataAttr(this.props)}
      className={wrapCls}
      style={style}
    >
      <label className={`${prefixCls}-agree-label`} htmlFor={name}>
        <Checkbox
          prefixCls={prefixCls}
          defaultChecked={defaultChecked}
          checked={checked}
          name={name}
          onChange={onChange}
          disabled={disabled}
        />
        {children}
      </label>
    </div>);
  }
}
