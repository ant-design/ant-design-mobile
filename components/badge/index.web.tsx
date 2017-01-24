import React from 'react';
import classNames from 'classnames';
import BadgeProps from './PropsType';

export default class Badge extends React.Component<BadgeProps, any> {
  static defaultProps = {
    prefixCls: 'am-badge',
    text: null,
    dot: false,
    corner: false,
    overflowCount: 99,
    size: null,
  };

  render() {
    let { text, prefixCls, overflowCount, className, style, children, hot } = this.props;

    const dot = this.props.dot;
    const size = this.props.size;
    const corner = this.props.corner;

    text = text > overflowCount ? `${overflowCount}+` : text;

    // dot mode don't need text
    if (dot) {
      text = '';
    }

    // null undefined "" "0" 0
    const hidden = (!text || text === '0') && !dot;

    const scrollNumberCls = classNames({
      [`${prefixCls}-dot`]: dot,
      [`${prefixCls}-dot-large`]: dot && (size === 'large'),
      [`${prefixCls}-text`]: !dot && !corner,
      [`${prefixCls}-corner`]: corner,
      [`${prefixCls}-corner-large`]: corner && (size === 'large'),
    });

    const badgeCls = classNames({
      [className as string]: !!className,
      [prefixCls as string]: true,
      [`${prefixCls}-not-a-wrapper`]: !children,
      [`${prefixCls}-corner-wrapper`]: corner,
      [`${prefixCls}-hot`]: !!hot,
      [`${prefixCls}-corner-wrapper-large`]: corner && (size === 'large'),
    });

    return (
      <span className={badgeCls} title={text}>
        {children}
        { !hidden && <sup className={scrollNumberCls} style={style} > {text} </sup> }
      </span>);
  }
}
