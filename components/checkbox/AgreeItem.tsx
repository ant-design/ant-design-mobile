import React from 'react';
import classnames from 'classnames';
import Checkbox from './Checkbox';
import { AgreeItemPropsType } from './PropsType';
import getDataAttr from '../_util/getDataAttr';

export default class AgreeItem extends React.Component<AgreeItemPropsType, any> {
  static defaultProps = {
    prefixCls: 'am-checkbox',
  };

  render() {
    const { style, ...restProps } = this.props;
    const { prefixCls, className } = restProps;
    const wrapCls = classnames(`${prefixCls}-agree`, className);

    return (<div {...getDataAttr(restProps)} className={wrapCls} style={style}>
      <Checkbox {...restProps} className={`${prefixCls}-agree-label`} />
    </div>);
  }
}
