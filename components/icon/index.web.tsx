import * as React from 'react';
import classNames from 'classnames';

// http://stackoverflow.com/questions/29891458/webpack-require-every-file-in-directory
// const svgRequire = (require as any).context('./style/assets', false, /\.svg$/);
// svgRequire.keys().forEach(key => svgRequire(key));

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

  renderSvg = () => {
    let svg;
    try {
      svg = require(`./style/assets/${this.props.type}.svg`);
    } catch (e) {

    } finally {
      return svg;
    }
  }
  render() {
    const { type, className, style, size, ...restProps } = this.props;
    let xlinkHref = this.renderSvg();
    let outerIcon;
    if (!xlinkHref) {
      outerIcon = true;
      xlinkHref = type;
    } else {
      xlinkHref = `#${type}`;
    }
    const iconClassName = classNames({
      'am-icon': true,
      [`am-icon-${outerIcon ? type.substr(1) : type}`]: true,
      [`am-icon-${size}`]: true,
      [className as string]: !!className,
    });
    return <svg className={iconClassName} style={style} {...restProps}>
      <use xlinkHref={xlinkHref} />
    </svg>;
  }
}
