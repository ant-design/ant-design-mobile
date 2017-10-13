import React from 'react';
import classnames from 'classnames';
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
    const { type, className, size, ...restProps } = this.props;
    const cls = classnames(className, 'am-icon', `am-icon-${type}`, `am-icon-${size}`);
    return (
      <svg className={cls} {...restProps}>
        <use xlinkHref={`#${type}`} />
      </svg>
    );
  }
}
