import classnames from 'classnames';
import React from 'react';
import loadSprite from './loadSprite';
import { IconPropsType } from './PropsType';

export interface IconProps extends IconPropsType {
  className?: string;
  style?: React.CSSProperties;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export default class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    size: 'md',
  };
  componentDidMount() {
    loadSprite();
  }
  render() {
    const { type, className, size, ...restProps } = this.props;
    const cls = classnames(
      className,
      'am-icon',
      `am-icon-${type}`,
      `am-icon-${size}`
    );
    return (
      <svg className={cls} {...restProps}>
        <use xlinkHref={`#${type}`} />
      </svg>
    );
  }
}
