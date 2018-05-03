import classnames from 'classnames';
import * as React from 'react';
import loadSprite from './loadSprite';
import { IconPropsType } from './PropsType';
import { Omit } from '../_util/types';

export type SvgProps = Omit<
  React.HTMLProps<SVGSVGElement>,
  'size' | 'type'
>;
export interface IconProps extends IconPropsType, SvgProps {
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
      `am-icon-${size}`,
    );
    return (
      <svg className={cls} {...restProps}>
        <use xlinkHref={`#${type}`} />
      </svg>
    );
  }
}
