import React from 'react';
import RcCheckbox from 'rc-checkbox';
import classNames from 'classnames';
import { CheckboxProps } from './PropsType';

export default class Checkbox extends React.Component<CheckboxProps, any> {
  static defaultProps = {
    prefixCls: 'am-checkbox',
  };

  static CheckboxItem: any;
  static AgreeItem: any;

  render() {
    let { prefixCls, style, name, defaultChecked, checked, disabled, className, onChange, children } = this.props;
    const classString = classNames({
      [className as string]: !!className,
      [`${prefixCls}-wrapper`]: true,
    });
    return (
      <label className={classString}>
        <RcCheckbox
          prefixCls={prefixCls}
          style={style}
          checked={checked}
          defaultChecked={defaultChecked}
          name={name}
          onChange={onChange}
          disabled={disabled}
        />
        { children !== undefined ? <span className={`${prefixCls}-text`}>{children}</span> : null }
      </label>
    );
  }
}
