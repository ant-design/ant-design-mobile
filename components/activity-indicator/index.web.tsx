import React from 'react';
import classNames from 'classnames';
import ActivityIndicatorProps from './PropsType';

export default class ActivityIndicator extends React.Component<ActivityIndicatorProps, any> {
  static defaultProps = {
    prefixCls: 'am-activity-indicator',
    animating: true,
    size: 'small',
    color: 'gray',
    panelColor: 'rgba(34,34,34,0.6)',
    toast: false,
  };

  render() {
    const { prefixCls, className, animating, toast, size, color, text } = this.props;
    const wrapClass = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
      [className as string]: !!className,
      [`${prefixCls}-toast`]: !!toast,
    });
    const spinnerClass = classNames({
      [`${prefixCls}-spinner`]: true,
      [`${prefixCls}-spinner-lg`]: !!toast || size === 'large',
      [`${prefixCls}-spinner-white`]: !!toast || color === 'white',
    });
    if (animating) {
      if (toast) {
        return (
          <div className={wrapClass}>
            <div className={`${prefixCls}-content`}>
              <span className={spinnerClass} />
              { text && (<span className={`${prefixCls}-toast`}>{text}</span>) }
            </div>
          </div>
        );
      } else {
        return (
          <div className={wrapClass}>
            <span className={spinnerClass} />
            { text && (<span className={`${prefixCls}-tip`}>{text}</span>) }
          </div>
        );
      }
    } else {
      return null;
    }
  }
}
