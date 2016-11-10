import React from 'react';
import RcCheckbox from 'rc-checkbox';
import classNames from 'classnames';
import { RadioProps } from './PropsType';

export default class Radio extends React.Component<RadioProps, any> {
  static RadioItem: any;

  static defaultProps = {
    prefixCls: 'am-radio',
  };

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
          name={name}
          defaultChecked={defaultChecked}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          type="radio"
        />
        { children !== undefined ? <span className={`${prefixCls}-text`}>{children}</span> : null }
      </label>
    );
  }
}
