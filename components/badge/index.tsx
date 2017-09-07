import React from 'react';
import classnames from 'classnames';
import BadgeProps from './PropsType';

export default class Badge extends React.Component<BadgeProps, any> {
  static defaultProps = {
    prefixCls: 'am-badge',
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false,
  };

  render() {
    let {
      className, prefixCls,
      children, text, size, overflowCount, dot, corner, hot, ...restProps,
    } = this.props;
    overflowCount = overflowCount as number;
    text = typeof text === 'number' && text > overflowCount ? `${overflowCount}+` : text;

    // dot mode don't need text
    if (dot) {
      text = '';
    }

    const scrollNumberCls = classnames({
      [`${prefixCls}-dot`]: dot,
      [`${prefixCls}-dot-large`]: dot && (size === 'large'),
      [`${prefixCls}-text`]: !dot && !corner,
      [`${prefixCls}-corner`]: corner,
      [`${prefixCls}-corner-large`]: corner && (size === 'large'),
    });

    const badgeCls = classnames(prefixCls, className, {
      [`${prefixCls}-not-a-wrapper`]: !children,
      [`${prefixCls}-corner-wrapper`]: corner,
      [`${prefixCls}-hot`]: !!hot,
      [`${prefixCls}-corner-wrapper-large`]: corner && (size === 'large'),
    });

    return (
      <span className={badgeCls}>
        {children}
        {(text || dot) && <sup className={scrollNumberCls} {...restProps}>{text}</sup>}
      </span>
    );
  }
}
