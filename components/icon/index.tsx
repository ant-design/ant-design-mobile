import React from 'react';
import classNames from 'classnames';
import loadSprite from './loadSprite';

export interface IconPropType {
  type: string;
  className?: string;
  style?: React.CSSProperties;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  onClick?: (e?: any) => void;
}

export default class Icon extends React.Component<IconPropType, any> {
  static defaultProps = {
    size: 'md',
  };
  componentDidMount() {
    loadSprite();
  }
  render() {
    const { type, className, style, size, ...restProps } = this.props;
    const iconClassName = classNames('am-icon', {
      [`am-icon-${type}`]: true,
      [`am-icon-${size}`]: true,
      [className as string]: !!className,
    });
    return (
      <svg className={iconClassName} style={style} {...restProps}>
        <use xlinkHref={`#${type}`} />
      </svg>
    );
  }
}
