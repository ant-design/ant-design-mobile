import classnames from 'classnames';
import RcCheckbox from 'rc-checkbox';
import * as React from 'react';
import { RadioPropsType } from './PropsType';

export interface RadioProps extends RadioPropsType {
  prefixCls?: string;
  listPrefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default class Radio extends React.Component<RadioProps, any> {
  static RadioItem: any;

  static defaultProps = {
    prefixCls: 'am-radio',
    wrapLabel: true,
  };

  render() {
    const { className, style, ...restProps } = this.props;
    const { prefixCls, children } = restProps;
    const wrapCls = classnames(`${prefixCls}-wrapper`, className);
    if ('class' in restProps) {
      // Todo https://github.com/developit/preact-compat/issues/422
      /* tslint:disable:no-string-literal */
      delete (restProps as any)['class'];
    }
    const mark = (
      <label className={wrapCls} style={style}>
        <RcCheckbox {...restProps} type="radio" />
        {children}
      </label>
    );
    if (this.props.wrapLabel) {
      return mark;
    }
    return <RcCheckbox {...this.props} type="radio" />;
  }
}
