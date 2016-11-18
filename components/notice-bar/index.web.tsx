/* tslint:disable:no-switch-case-fall-through */
import React from 'react';
import classNames from 'classnames';
import getDataAttr from '../_util/getDataAttr';
import splitObject from '../_util/splitObject';
import Icon from '../icon';
import NoticeBarProps from './PropsType';

export default class NoticeBar extends React.Component<NoticeBarProps, any> {
  static defaultProps = {
    prefixCls: 'am-notice-bar',
    mode: '',
    icon: <Icon type={require('./style/assets/trips.svg')} size="xxs" />,
    onClick() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  onClick = () => {
    const { mode, onClick } = this.props;
    if (onClick) {
      onClick();
    }
    if (mode === 'closable') {
      this.setState({
        show: false,
      });
    }
  }

  render() {
    const [{ mode, icon, onClick, children, className, prefixCls }, restProps] = splitObject(this.props,
      ['mode', 'icon', 'onClick', 'children', 'className', 'prefixCls']);

    const extraProps: any = {};
    let operationDom: any = null;
    if (mode === 'closable') {
      operationDom = (
        <div className={`${prefixCls}-operation`} onClick={this.onClick}>
          <Icon type="cross"  size="md" />
        </div>
      );
    } else {
      if (mode === 'link') {
        operationDom = (
          <div className={`${prefixCls}-operation`}>
            <Icon type="right"  size="md" />
          </div>
        );
      }
      extraProps.onClick = onClick;
    }

    const wrapCls = classNames({
      [prefixCls as string]: true,
      [className as string]: !!className,
    });

    return this.state.show ? (
      <div {...getDataAttr(this.props) } className={wrapCls} {...restProps} {...extraProps}>
        { icon ? <div className={`${prefixCls}-icon`}> {icon} </div> : null }
        <div className={`${prefixCls}-content`}>{children}</div>
        {operationDom}
      </div>
    ) : null;
  }
}
