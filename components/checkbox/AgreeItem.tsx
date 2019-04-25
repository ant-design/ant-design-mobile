import classnames from 'classnames';
import * as React from 'react';
import getDataAttr from '../_util/getDataAttr';
import Checkbox from './Checkbox';
import { CheckboxPropsType } from './PropsType';

export interface AgreeItemPropsType extends CheckboxPropsType {
  prefixCls?: string;
  className?: string;
  name?: string;
  wrapLabel?: boolean;
  style?: React.CSSProperties;
}

export default class AgreeItem extends React.Component<
  AgreeItemPropsType,
  any
> {
  static defaultProps = {
    prefixCls: 'am-checkbox',
  };

  render() {
    const { style, ...restProps } = this.props;
    const { prefixCls, className } = restProps;
    const wrapCls = classnames(`${prefixCls}-agree`, className);

    return (
      <div {...getDataAttr(restProps)} className={wrapCls} style={style}>
        <Checkbox {...restProps} className={`${prefixCls}-agree-label`} />
      </div>
    );
  }
}
