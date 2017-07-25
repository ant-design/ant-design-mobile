import React from 'react';
import classNames from 'classnames';

export interface BadgeProps {
  dot?: boolean;
  text?: any;
  className?: string;
}

const prefixCls = 'am-tabs-badge';

export default class Badge extends React.Component<BadgeProps, any> {
  static defaultProps = {
    dot: false,
  };

  render() {
    let {
      className,
      children, text, dot,
    } = this.props;
    text = typeof text === 'number' ? `${text}` : text;

    // dot mode don't need text
    if (dot) {
      text = '';
    }

    const scrollNumberCls = classNames({
      [`${prefixCls}-dot`]: dot,
      [`${prefixCls}-text`]: !dot,
    });

    const badgeCls = classNames({
      [className as string]: !!className,
      [prefixCls as string]: true,
      [`${prefixCls}-not-a-wrapper`]: !children,
    });

    return (
      <span className={badgeCls}>
        {children}
        {(text || dot) && <sup className={scrollNumberCls}>{text}</sup>}
      </span>
    );
  }
}
