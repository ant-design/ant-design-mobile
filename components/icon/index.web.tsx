import * as React from 'react';
// import classNames from 'classnames';

// export interface IconPropType {
//   type: string;
//   className?: string;
//   style?: React.CSSProperties;
//   size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
// }

export default class Icon extends React.Component<IconPropType, any> {
  // static defaultProps = {
  //   size: 'md',
  // };
  render() {
    /*
    const { type, className, style, size } = this.props;
    const iconClassName = classNames({
      'am-icon': true,
      [`am-icon-${type}`]: true,
      [`am-icon-${size}`]: true,
      [className]: !!className,
    });

    return <i className={iconClassName} style={style} />;
    */

    const svgSymbols = require('./style/assets/svg-symbols.svg');
    return <svg>
      <use xlinkHref={`${svgSymbols}#aliwangwang`} />
    </svg>;
  }
}
