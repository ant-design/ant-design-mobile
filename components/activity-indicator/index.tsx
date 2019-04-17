/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import * as React from 'react';
import { ActivityIndicatorPropTypes } from './PropsType';

export interface ActivityIndicatorProps extends ActivityIndicatorPropTypes {
  prefixCls?: string;
  className?: string;
}

export default class ActivityIndicator extends React.Component<
  ActivityIndicatorProps,
  any
> {
  static defaultProps = {
    prefixCls: 'am-activity-indicator',
    animating: true,
    size: 'small',
    panelColor: 'rgba(34,34,34,0.6)',
    toast: false,
  };

  render() {
    const { prefixCls, className, animating, toast, size, text } = this.props;
    const wrapClass = classnames(prefixCls, className, {
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
      [`${prefixCls}-toast`]: !!toast,
    });
    const spinnerClass = classnames(`${prefixCls}-spinner`, {
      [`${prefixCls}-spinner-lg`]: !!toast || size === 'large',
    });
    if (animating) {
      if (toast) {
        return (
          <div className={wrapClass}>
            {text ? (
              <div className={`${prefixCls}-content`}>
                <span className={spinnerClass} aria-hidden="true" />
                <span className={`${prefixCls}-toast`}>{text}</span>
              </div>
            ) : (
              <div className={`${prefixCls}-content`}>
                <span className={spinnerClass} aria-label="Loading" />
              </div>
            )}
          </div>
        );
      } else {
        return text ? (
          <div className={wrapClass}>
            <span className={spinnerClass} aria-hidden="true" />
            <span className={`${prefixCls}-tip`}>{text}</span>
          </div>
        ) : (
          <div className={wrapClass}>
            <span className={spinnerClass} aria-label="loading" />
          </div>
        );
      }
    } else {
      return null;
    }
  }
}
