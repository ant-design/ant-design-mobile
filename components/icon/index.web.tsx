import React from 'react';
import classNames from 'classnames';

// http://stackoverflow.com/questions/29891458/webpack-require-every-file-in-directory
// const svgRequire = (require as any).context('./style/assets', false, /\.svg$/);
// svgRequire.keys().forEach(key => svgRequire(key));
declare const require: Function;
export interface IconPropType {
  type: string;
  className?: string;
  style?: React.CSSProperties;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  onClick?: (e?: any) => void;
}

const warnMsg = 'Icon props.type is invalid, have you set svg-sprite-loader correctly? see https://goo.gl/kN8oiw';
export default class Icon extends React.Component<IconPropType, any> {
  static defaultProps = {
    size: 'md',
  };

  renderSvg = () => {
    const { type } = this.props;
    let svg;
    try {
      svg = require(`./style/assets/${type}.svg`);
    } catch (e) {

    } finally {
      return svg;
    }
  }
  render() {
    const { type, className, style, size, ...restProps } = this.props;
    if (!type || typeof type !== 'string') {
      console.error(warnMsg);
      return null;
    }
    let xlinkHref = this.renderSvg();
    let outerIcon;
    if (!xlinkHref) {
      outerIcon = true;
      xlinkHref = type;
      if (!/^#/.test(type)) {
        console.error(warnMsg);
      }
    } else {
      if (!/^#/.test(xlinkHref)) {
        console.error(warnMsg);
      }
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
