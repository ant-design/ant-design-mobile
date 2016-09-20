import React from 'react';
import classNames from 'classnames';
import Checkbox from './Checkbox.web';
import AgreeItemProps from './AgreeItemPropsType';

export default class AgreeItem extends React.Component<AgreeItemProps, any> {
  static defaultProps = {
    prefixCls: 'am-checkbox',
  };

  render() {
    let { prefixCls, style, name, defaultChecked, checked, disabled, children, onChange, className } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-agree`]: true,
      [className]: className,
    });

    return (<div
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
