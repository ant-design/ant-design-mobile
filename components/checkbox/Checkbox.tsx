import classnames from 'classnames';
import RcCheckbox from 'rc-checkbox';
import * as React from 'react';

import { CheckboxPropsType } from './PropsType';

export interface CheckboxProps extends CheckboxPropsType {
  prefixCls?: string;
  className?: string;
  name?: string;
  wrapLabel?: boolean;
  style?: React.CSSProperties;
}

export default class Checkbox extends React.Component<CheckboxProps, any> {
  static CheckboxItem: any;
  static AgreeItem: any;
  static defaultProps = {
    prefixCls: 'am-checkbox',
    wrapLabel: true,
  };

  render() {
    const { className, style, ...restProps } = this.props;
    const { prefixCls, children } = restProps;

    const wrapCls = classnames(`${prefixCls}-wrapper`, className);
    // Todo: wait for https://github.com/developit/preact-compat/issues/422, then we can remove class below
    if ('class' in restProps) {
      /* tslint:disable:no-string-literal */
      delete (restProps as any)['class'];
    }
    const mark = (
      <label className={wrapCls} style={style}>
        <RcCheckbox {...restProps} />
        {children}
      </label>
    );
    if (this.props.wrapLabel) {
      return mark;
    }
    return <RcCheckbox {...this.props} />;
  }
}
